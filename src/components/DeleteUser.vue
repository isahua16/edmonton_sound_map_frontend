<template>
  <v-row justify="center">
    <v-col cols="auto">
      <v-btn x-large class="my-16" color="error" @click="dialog = !dialog">
        <v-icon>mdi-delete</v-icon>
        Delete Account
      </v-btn>
      <v-dialog v-model="dialog">
        <v-card>
          <v-card-title class="mb-4 text-h5"> Delete account </v-card-title>
          <v-card-text>Enter your password to delete your account</v-card-text>
          <v-card-text>
            <v-text-field
              prepend-icon="mdi-lock-check"
              v-model="password_input"
              label="Password"
              type="password"
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="success" text @click="cancel_delete"> Cancel </v-btn>
            <v-btn color="error" :loading="loading" text @click="delete_user">
              Delete
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-snackbar :color="snackbar_color" app v-model="snackbar">
        <h3 class="text-center">{{ message }}</h3>
      </v-snackbar>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";
import Cookies from "vue-cookies";
export default {
  methods: {
    cancel_delete: function () {
      this.dialog = !this.dialog;
      this.password_input = "";
      this.snackbar = false;
    },
    delete_user: function () {
      this.loading = true;
      this.snackbar = false;
      if (this.password_input != undefined) {
        axios
          .request({
            url: `${process.env.VUE_APP_BASE_DOMAIN}/api/user`,
            method: `DELETE`,
            data: {
              token: Cookies.get("token"),
              password: this.password_input,
            },
          })
          .then(() => {
            this.loading = false;
            this.message = "Delete succesfull";
            this.snackbar_color = "success";
            this.snackbar = true;
            Cookies.remove("token");
            if (Cookies.get("is_admin")) {
              Cookies.remove("is_admin");
            }
            this.$root.$emit("token_update");
            this.$router.push(`/`);
          })
          .catch(() => {
            this.loading = false;
            this.message = "Delete failed";
            this.snackbar_color = "error";
            this.snackbar = true;
          });
      } else {
        this.loading = false;
        this.message = "Must enter password";
        this.snackbar_color = "error";
        this.snackbar = true;
      }
    },
  },
  data() {
    return {
      dialog: false,
      password_input: "",
      loading: false,
      message: undefined,
      snackbar: false,
      snackbar_color: "error",
    };
  },
};
</script>

<style scoped>
</style>
<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2 class="mt-16">Reset Password</h2>
          <v-text-field
            @keyup.enter="post_new_password"
            type="password"
            v-model="password"
            label="New password"
          ></v-text-field>
          <v-btn @click="post_new_password" color="primary">Submit</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import axios from "axios";
export default {
  mounted() {
    this.$root.$emit("nav_value_change", "/login");
  },
  data() {
    return {
      loading: false,
      password: "",
    };
  },
  methods: {
    post_new_password: function () {
      this.loading = true;
      if (this.password != "") {
        axios
          .request({
            url: `${process.env.VUE_APP_BASE_DOMAIN}/api/user/password`,
            method: `PATCH`,
            data: {
              token: this.$route.params.token,
              password: this.password,
            },
          })
          .then(() => {
            this.loading = false;
            this.password = "";
            this.$root.$emit("snackbar", true, `Reset succesful`, "success");
            this.$router.push("/login");
            this.$root.$emit("nav_value_change", "/login");
          })
          .catch((err) => {
            console.log(err);
            this.loading = false;
            this.password = "";
            this.$root.$emit("snackbar", true, `Expired token`, "error");
          });
      } else {
        this.$root.$emit("snackbar", true, `Enter new password`, "error");
      }
    },
  },
};
</script>

<style scoped>
</style>
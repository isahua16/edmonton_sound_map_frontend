<template>
  <v-main>
    <v-container>
      <v-row justify="center">
        <v-col cols="10">
          <h2 class="my-16">Forgot Password</h2>
          <v-text-field
            @keyup.enter="post_password_token"
            label="Email"
            v-model="email"
            type="text"
          ></v-text-field>
          <v-btn @click="post_password_token" :loading="loading" color="primary"
            >Submit</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    post_password_token: function () {
      this.loading = true;
      if (this.email !== "") {
        axios
          .request({
            url: `${process.env.VUE_APP_BASE_DOMAIN}/api/user/password`,
            method: `POST`,
            data: {
              email: this.email,
            },
          })
          .then(() => {
            this.loading = false;
            this.email = "";
            this.$root.$emit(
              "snackbar",
              true,
              `Password reset email sent`,
              "success"
            );
          })
          .catch(() => {
            this.loading = false;
            this.email = "";
            this.$root.$emit(
              "snackbar",
              true,
              `Password reset email sent`,
              "success"
            );
          });
      } else {
        this.$root.$emit("snackbar", true, `Enter your email`, "success");
      }
    },
  },
  data() {
    return {
      loading: false,
      email: "",
    };
  },
};
</script>

<style scoped>
</style>
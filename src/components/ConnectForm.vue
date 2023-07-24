<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="10">
        <h2 class="my-16">Connect</h2>
        <v-text-field
          @keyup.enter="login_click"
          v-model="email_input"
          label="Email"
          type="text"
        ></v-text-field>
        <v-text-field
          @keyup.enter="login_click"
          v-model="password_input"
          label="Password"
          type="password"
        ></v-text-field>
        <v-btn
          :loading="loading"
          class="my-5"
          @click="login_click"
          color="primary"
        >
          Submit</v-btn
        >
        <a class="ml-5" @click="go_to_forgot">Forgot Password?</a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import Cookies from "vue-cookies";
export default {
  methods: {
    go_to_forgot: function () {
      this.$router.push("/forgot");
      this.$root.$emit("nav_value_change", "/login");
    },
    login_click: function () {
      this.loading = true;
      if (this.email_input != "" && this.password_input != "") {
        axios
          .request({
            url: `${process.env.VUE_APP_BASE_DOMAIN}/api/login`,
            method: `POST`,
            data: {
              email: this.email_input,
              password: this.password_input,
            },
          })
          .then((res) => {
            this.loading = false;
            Cookies.set("token", res[`data`][0][`token`]);
            if (res[`data`][0][`is_admin`] == 1) {
              Cookies.set("is_admin", true);
            }
            this.$root.$emit("token_update");
            if (this.$route.path !== `/`) {
              this.$router.push(`/`);
              this.$root.$emit("nav_value_change", "/");
            }
          })
          .catch((err) => {
            this.loading = false;
            this.$root.$emit(
              "snackbar",
              true,
              `${err["response"]["data"]}`,
              "error"
            );
          });
      } else {
        this.loading = false;
        this.$root.$emit("snackbar", true, "All fields are required", "error");
      }
    },
  },
  data() {
    return {
      email_input: "",
      password_input: "",
      loading: false,
    };
  },
};
</script>

<style scoped>
</style>
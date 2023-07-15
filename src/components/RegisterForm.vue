<template>
  <v-container>
    <h2 class="mt-16">Register</h2>
    <v-text-field
      v-model="email_input"
      label="Email"
      type="text"
    ></v-text-field>
    <v-text-field
      v-model="username_input"
      label="Username"
      type="text"
    ></v-text-field>
    <v-text-field
      v-model="password_input"
      label="Password"
      type="password"
    ></v-text-field>
    <v-btn class="my-5" @click="signup_click" color="primary"> Submit </v-btn>
    <v-alert
      :value="alert"
      color="red"
      icon="mdi-alert-circle"
      transition="scale-transition"
    >
      {{ message }}
    </v-alert>
  </v-container>
</template>
<script>
import axios from "axios";
import Cookies from "vue-cookies";
export default {
  methods: {
    signup_click: function () {
      this.alert = false;
      this.message = undefined;
      if (
        this.email_input != "" &&
        this.username_input != "" &&
        this.password_input != ""
      ) {
        axios
          .request({
            url: `${process.env.VUE_APP_BASE_DOMAIN}/api/user`,
            method: `POST`,
            data: {
              email: this.email_input,
              username: this.username_input,
              password: this.password_input,
            },
          })
          .then((res) => {
            Cookies.set("token", res[`data`][0][`token`]);
            if (res[`data`][0][`is_admin`] == 1) {
              Cookies.set("is_admin", true);
            }
            this.$root.$emit("token_update");
            this.$router.push(`/profile`);
          })
          .catch((err) => {
            console.log(err);
            this.message = "Something went wrong";
            this.alert = true;
          });
      } else {
        this.message = "All fields are required";
        this.alert = true;
      }
    },
  },
  data() {
    return {
      alert: false,
      message: undefined,
      email_input: "",
      username_input: "",
      password_input: "",
    };
  },
};
</script>

<style scoped>
</style>
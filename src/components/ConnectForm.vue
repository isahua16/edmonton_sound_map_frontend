<template>
  <v-container>
    <h2 class="mt-16">Connect</h2>
    <v-text-field
      v-model="email_input"
      label="Email"
      type="text"
    ></v-text-field>
    <v-text-field
      v-model="password_input"
      label="Password"
      type="password"
    ></v-text-field>
    <v-btn class="my-5" @click="login_click" color="primary"> Submit</v-btn>
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
    login_click: function () {
      this.alert = false;
      this.message = undefined;
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
            console.log(res);
            Cookies.set("token", res[`data`][0][`token`]);
            if (res[`data`][0][`is_admin`] == 1) {
              Cookies.set("is_admin", true);
            }
            this.$root.$emit("token_update");
            this.$router.push(`/profile`);
          })
          .catch((err) => {
            console.log(err);
            this.alert = true;
            this.message = "Login failed";
          });
      } else {
        this.alert = true;
        this.message = "All fields are required";
      }
    },
  },
  data() {
    return {
      alert: false,
      message: undefined,
      email_input: "",
      password_input: "",
    };
  },
};
</script>

<style scoped>
</style>
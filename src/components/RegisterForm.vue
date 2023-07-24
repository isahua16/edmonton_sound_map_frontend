<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="10">
        <h2 class="my-16">Register</h2>
        <v-text-field
          @keyup.enter="signup_click"
          v-model="email_input"
          label="Email"
          type="text"
        ></v-text-field>
        <v-text-field
          @keyup.enter="signup_click"
          v-model="username_input"
          label="Username"
          type="text"
        ></v-text-field>
        <v-text-field
          @keyup.enter="signup_click"
          v-model="password_input"
          label="Password"
          type="password"
        ></v-text-field>
        <v-checkbox v-model="terms">
          <template v-slot:label>
            <div>
              I agree to the
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <a
                    target="_blank"
                    href="https://docs.google.com/document/d/e/2PACX-1vSLD-abiEGpW679YSNpSKAqjBdLkiJC_6VXg3AkLi91MWujVz-KE1o3a89ILni-21vDum7-bDeYscIK/pub"
                    @click.stop
                    v-on="on"
                  >
                    terms and conditions
                  </a>
                </template>
                Opens in new window
              </v-tooltip>
            </div>
          </template>
        </v-checkbox>
        <v-btn
          :loading="loading"
          class="my-5"
          @click="signup_click"
          color="primary"
        >
          Submit
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  methods: {
    signup_click: function () {
      this.loading = true;
      if (
        this.email_input != "" &&
        this.username_input != "" &&
        this.password_input != "" &&
        this.terms !== false
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
          .then(() => {
            this.loading = false;
            this.$root.$emit(
              "snackbar",
              true,
              "Verification email sent",
              "success"
            );
            this.email_input = "";
            this.username_input = "";
            this.password_input = "";
          })
          .catch(() => {
            this.loading = false;
            this.$root.$emit("snackbar", true, "Sign up failed", "error");
            this.email_input = "";
            this.username_input = "";
            this.password_input = "";
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
      username_input: "",
      password_input: "",
      loading: false,
      terms: false,
    };
  },
};
</script>

<style scoped>
</style>
<template>
  <v-main>
    <v-container>
      <v-row justify="center">
        <v-col cols="10">
          <h2 class="my-16">Email Verification</h2>
          <p>{{ message }}</p>
          <v-btn color="primary" @click="go_to_login"> Log in </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    go_to_login: function () {
      this.$router.push("/login");
      this.$root.$emit("nav_value_change", "/login");
    },
    send_verification_token: function () {
      axios
        .request({
          url: `${process.env.VUE_APP_BASE_DOMAIN}/api/user/verify`,
          method: `PATCH`,
          data: {
            token: this.$route.params.token,
          },
        })
        .then(() => {
          this.verify = true;
          this.message = "Verification successful. You can now log in.";
        })
        .catch(() => {
          this.message =
            "Verification failed. Please log in to generate a new verification email.";
        });
    },
  },
  mounted() {
    this.$root.$emit("nav_value_change", "/signup");
    this.send_verification_token();
  },
  data() {
    return {
      title: "Email Verification ",
      message: "Verification in progress",
      verified: false,
    };
  },
};
</script>

<style scoped>
</style>
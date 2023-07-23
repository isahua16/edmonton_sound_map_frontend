<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col>
          <h2 class="mt-16">Forgot Password</h2>
          <v-text-field
            label="Email"
            v-model="email"
            type="text"
          ></v-text-field>
          <v-btn
            @keyup.enter="post_password_token"
            @click="post_password_token"
            :loading="loading"
            color="primary"
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
      axios
        .request({ url: "" })
        .then((res) => {
          console.log(res);
          this.loading = false;
          this.email = "";
        })
        .catch((err) => {
          console.log(err);
          this.loading = false;
          this.email = "";
        });
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
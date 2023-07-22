<template>
  <v-main>
    <v-container>
      <v-row justify="center">
        <v-col cols="auto">
          <h2>{{ message }}</h2>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    send_verification_token: function () {
      axios
        .request({
          url: `${process.env.VUE_APP_BASE_DOMAIN}/api/user/verify`,
          method: `PATCH`,
          data: {
            token: this.$route.params.token,
          },
        })
        .then((res) => {
          console.log(res);
          this.message = "Verification successfull";
        })
        .catch((err) => {
          console.log(err);
          this.message = "Verification failed";
        });
    },
  },
  mounted() {
    this.send_verification_token();
  },
  data() {
    return {
      message: "Verification in progress",
    };
  },
};
</script>

<style scoped>
</style>
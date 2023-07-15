<template>
  <v-btn v-if="status == 0" color="success" @click="approve_feature"
    >Approve</v-btn
  >
  <v-btn v-else color="error">Remove</v-btn>
</template>

<script>
import axios from "axios";
import Cookies from "vue-cookies";

export default {
  methods: {
    approve_feature: function () {
      axios
        .request({
          url: `${process.env.VUE_APP_BASE_DOMAIN}/api/admin/feature/approve`,
          method: `PATCH`,
          data: {
            token: Cookies.get("token"),
            feature_id: this.feature_id,
          },
        })
        .then((res) => {
          console.log(res);
          this.$emit("status_changed", 1);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  props: {
    feature_id: {
      type: Number,
    },
    status: {
      type: Number,
    },
  },
};
</script>

<style scoped>
</style>
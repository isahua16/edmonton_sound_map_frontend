<template>
  <v-row class="my-8">
    <v-btn
      v-if="status === false && disabled == true"
      color="success"
      @click="approve_feature"
      >Publish</v-btn
    >
    <v-btn
      v-if="status == true && disabled == true"
      color="warning"
      @click="remove_feature"
      >Unpublish</v-btn
    >
    <v-btn
      v-if="status == false && disabled == true"
      color="warning"
      @click="$root.$emit('edit_info')"
      >Edit</v-btn
    >
    <v-btn
      v-if="status == false && disabled == true"
      color="error"
      @click="dialog = !dialog"
      >Delete</v-btn
    >
    <v-btn
      v-if="status == false && disabled == false"
      color="success"
      @click="$root.$emit('save_edit')"
      >Save</v-btn
    >
    <v-btn
      v-if="status == false && disabled == false"
      color="error"
      @click="$root.$emit('cancel_edit')"
      >Cancel</v-btn
    >
    <v-dialog v-model="dialog">
      <v-card>
        <v-card-title class="text-h5"> Delete feature </v-card-title>
        <v-card-text
          >Are you sure you want to delete this submission?</v-card-text
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="success" text @click="dialog = false"> No </v-btn>
          <v-btn color="error" text @click="delete_feature"> Yes </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import axios from "axios";
import Cookies from "vue-cookies";

export default {
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    edit_feature_info: function () {},
    edit_feature_image: function () {},
    delete_feature: function () {
      this.dialog = false;
      axios
        .request({
          url: `${process.env.VUE_APP_BASE_DOMAIN}/api/admin/feature`,
          method: `DELETE`,
          data: {
            token: Cookies.get(`token`),
            feature_id: this.feature_id,
          },
        })
        .then((res) => {
          console.log(res);
          this.$root.$emit("feature_delete", this.feature_id);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    remove_feature: function () {
      axios
        .request({
          url: `${process.env.VUE_APP_BASE_DOMAIN}/api/admin/feature/reject`,
          method: `PATCH`,
          data: {
            token: Cookies.get("token"),
            feature_id: this.feature_id,
          },
        })
        .then(() => {
          this.$emit("status_changed", !this.status);
        })
        .catch(() => {});
    },
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
        .then(() => {
          this.$emit("status_changed", !this.status);
        })
        .catch(() => {});
    },
  },
  props: {
    feature_id: {
      type: Number,
    },
    status: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
    },
  },
};
</script>

<style scoped>
</style>
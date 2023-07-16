<template>
  <v-container>
    <v-avatar size="84">
      <img :src="image_src" alt="" />
    </v-avatar>
    <v-text-field :disabled="disabled" v-model="username"></v-text-field>
    <v-text-field :disabled="disabled" v-model="email"></v-text-field>
    <v-textarea :disabled="disabled" v-model="bio"></v-textarea>
    <v-btn @click="click_edit" v-if="disabled" color="warning">Edit</v-btn>
    <v-btn @click="click_save" v-if="!disabled" color="success">Save</v-btn>
    <v-btn @click="click_cancel" v-if="!disabled" color="error">Cancel</v-btn>
  </v-container>
</template>

<script>
import axios from "axios";
import Cookies from "vue-cookies";
export default {
  data() {
    return {
      username: undefined,
      email: undefined,
      bio: undefined,
      image_src: undefined,
      disabled: true,
      username_backup: undefined,
      email_backup: undefined,
      bio_backup: undefined,
    };
  },
  mounted() {
    this.get_profile();
  },
  methods: {
    click_edit: function () {
      this.disabled = !this.disabled;
      this.username_backup = this.username;
      this.email_backup = this.email;
      this.bio_backup = this.bio;
    },
    click_save: function () {
      this.disabled = !this.disabled;
    },
    click_cancel: function () {
      this.disabled = !this.disabled;
      this.username = this.username_backup;
      this.email = this.email_backup;
      this.bio = this.bio_backup;
    },
    get_user_image: function () {
      axios
        .request({
          url: `${process.env.VUE_APP_BASE_DOMAIN}/api/user/image`,
          params: {
            token: Cookies.get("token"),
          },
          responseType: "blob",
        })
        .then((res) => {
          console.log(res);
          this.image_src = URL.createObjectURL(res["data"]);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    get_profile: function () {
      axios
        .request({
          url: `${process.env.VUE_APP_BASE_DOMAIN}/api/user`,
          params: {
            token: Cookies.get("token"),
          },
        })
        .then((res) => {
          console.log(res);
          this.username = res[`data`][0][`username`];
          this.email = res[`data`][0][`email`];
          this.bio = res[`data`][0][`bio`];
          this.get_user_image();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
</style>
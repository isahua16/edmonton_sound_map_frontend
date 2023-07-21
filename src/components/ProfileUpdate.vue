<template>
  <v-container>
    <v-row dense justify="center">
      <v-col cols="auto">
        <v-btn
          :disabled="disabled"
          large
          @click="dialog = !dialog"
          icon
          width="auto"
          height="auto"
          class="pa-1"
          :outlined="!disabled"
        >
          <v-avatar size="120">
            <img class="avatar_image" :src="image_src" alt="" />
          </v-avatar>
        </v-btn>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog">
      <v-card>
        <v-card-title class="text-h5"> Upload Image </v-card-title>
        <v-file-input
          class="mx-4"
          hint="500kB or less"
          persistent-hint
          v-model="image"
          show-size
          prepend-icon="mdi-image"
          label="Image"
        ></v-file-input>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" text @click="dialog = false"> Cancel </v-btn>
          <v-btn color="success" text @click="update_image" :loading="loading">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-text-field :disabled="disabled" v-model="username"></v-text-field>
    <v-text-field :disabled="disabled" v-model="email"></v-text-field>
    <v-textarea :disabled="disabled" v-model="bio"></v-textarea>
    <v-btn @click="click_edit" v-if="disabled" color="warning">Edit</v-btn>
    <v-btn
      @click="click_save"
      v-if="!disabled"
      color="success"
      :loading="loading"
      >Save</v-btn
    >
    <v-btn @click="click_cancel" v-if="!disabled" color="error">Cancel</v-btn>
    <delete-user></delete-user>
  </v-container>
</template>

<script>
import axios from "axios";
import Cookies from "vue-cookies";
import DeleteUser from "@/components/DeleteUser.vue";
export default {
  components: {
    DeleteUser,
  },
  data() {
    return {
      username: undefined,
      email: undefined,
      bio: undefined,
      image: null,
      image_src: undefined,
      disabled: true,
      username_backup: undefined,
      email_backup: undefined,
      bio_backup: undefined,
      dialog: false,
      loading: false,
    };
  },
  mounted() {
    this.get_profile();
  },
  methods: {
    cancel_image: function () {
      this.dialog = false;
      this.image = null;
    },
    update_image: function () {
      this.loading = true;
      if (this.image != null) {
        let form = new FormData();
        form.append("image", this.image);
        form.append("token", Cookies.get("token"));
        axios
          .request({
            url: `${process.env.VUE_APP_BASE_DOMAIN}/api/user/image`,
            method: `PATCH`,
            data: form,
            headers: { "Content-Type": "multipart/form-data" },
          })
          .then((res) => {
            console.log(res);
            this.get_profile();
            this.dialog = false;
            this.image = null;
            this.loading = false;
            this.$root.$emit("snackbar", true, "Upload succesfull", "success");
          })
          .catch(() => {
            this.loading = false;
            this.$root.$emit("snackbar", true, "Upload failed", "error");
          });
      }
    },
    click_edit: function () {
      this.disabled = !this.disabled;
      this.username_backup = this.username;
      this.email_backup = this.email;
      this.bio_backup = this.bio;
    },
    click_save: function () {
      this.loading = true;
      if (this.username != "" && this.email != "" && this.bio != "") {
        axios
          .request({
            url: `${process.env.VUE_APP_BASE_DOMAIN}/api/user`,
            method: `PATCH`,
            data: {
              token: Cookies.get("token"),
              email: this.email,
              username: this.username,
              bio: this.bio,
            },
          })
          .then(() => {
            this.disabled = !this.disabled;
            this.loading = false;
            this.$root.$emit("snackbar", true, "Update succesfull", "success");
          })
          .catch(() => {
            this.loading = false;
            this.$root.$emit("snackbar", true, "Update failed", "error");
          });
      } else {
        this.loading = false;
        this.$root.$emit("snackbar", true, "Fields cannot be empty", "error");
      }
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
          this.image_src = URL.createObjectURL(res["data"]);
        })
        .catch(() => {});
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
          this.username = res[`data`][0][`username`];
          this.email = res[`data`][0][`email`];
          this.bio = res[`data`][0][`bio`];
          this.get_user_image();
        })
        .catch(() => {});
    },
  },
};
</script>

<style scoped>
.avatar_image {
  object-fit: cover;
}
</style>
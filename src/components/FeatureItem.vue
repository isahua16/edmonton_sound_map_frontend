<template>
  <v-expansion-panel>
    <v-container>
      <v-row no-gutters>
        <v-col cols="12">
          <v-expansion-panel-header
            disable-icon-rotate
            @click="get_feature_media"
            ><h2>{{ local_feature_name }}</h2>
            <template v-if="is_approved == 0" v-slot:actions>
              <v-icon color="warning"> mdi-alert-circle </v-icon>
            </template>
            <template v-else v-slot:actions>
              <v-icon color="success"> mdi-check-circle </v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row no-gutters justify="center" class="my-5">
              <v-btn
                justify="center"
                large
                :disabled="disabled"
                icon
                width="auto"
                height="auto"
                class="pa-1"
                :outlined="!disabled"
              >
                <v-avatar size="120">
                  <img class="avatar_image" :src="image" />
                </v-avatar>
              </v-btn>
            </v-row>
            <v-text-field
              class="text-h5"
              :disabled="disabled"
              v-model="local_feature_name"
            ></v-text-field>
            <v-textarea
              auto-grow
              rows="2"
              row-height="15"
              :disabled="disabled"
              v-model="local_feature_description"
            ></v-textarea>
            <v-row dense>
              <v-col cols="1">
                <v-checkbox
                  :true-value="1"
                  :false-value="0"
                  dense
                  :disabled="disabled"
                  label="Interior"
                  v-model="local_feature_interior"
                ></v-checkbox>
                <v-checkbox
                  :true-value="1"
                  :false-value="0"
                  dense
                  :disabled="disabled"
                  label="Mechanical"
                  v-model="local_feature_mechanical"
                ></v-checkbox>
                <v-checkbox
                  :true-value="1"
                  :false-value="0"
                  dense
                  :disabled="disabled"
                  label="Natural"
                  v-model="local_feature_natural"
                ></v-checkbox>
                <v-checkbox
                  :true-value="1"
                  :false-value="0"
                  dense
                  :disabled="disabled"
                  label="Societal"
                  v-model="local_feature_societal"
                ></v-checkbox>
              </v-col>
            </v-row>
            <v-select
              v-model="local_feature_season"
              :items="seasons"
              :disabled="disabled"
            ></v-select>
            <v-select
              v-model="local_feature_time"
              :items="times"
              :disabled="disabled"
            ></v-select>
            <v-row justify="center" class="my-2">
              <audio
                style="display: block; width: 100%; margin-top: 10px"
                controls
                controlsList="nodownload"
                :src="audio"
              ></audio>
            </v-row>
            <v-row class="my-8">
              <v-btn
                v-if="is_approved === false && disabled == true"
                color="success"
                @click="approve_feature"
                :loading="approve_loading"
                >Publish</v-btn
              >
              <v-btn
                v-if="is_approved == true && disabled == true"
                color="warning"
                @click="remove_feature"
                :loading="remove_loading"
                >Unpublish</v-btn
              >
              <v-btn
                v-if="is_approved == false && disabled == true"
                color="warning"
                @click="start_edit_info"
                >Edit</v-btn
              >
              <v-btn
                v-if="is_approved == false && disabled == true"
                color="error"
                @click="dialog = true"
                >Delete</v-btn
              >
              <v-btn
                v-if="is_approved == false && disabled == false"
                color="success"
                @click="edit_feature_info"
                :loading="edit_loading"
                >Save</v-btn
              >
              <v-btn
                v-if="is_approved == false && disabled == false"
                color="error"
                @click="cancel_edit_info"
                >Cancel</v-btn
              >
              <v-dialog v-model="dialog">
                <v-card>
                  <v-card-title class="text-h5"> Delete feature </v-card-title>
                  <v-card-text
                    >Are you sure you want to delete this
                    submission?</v-card-text
                  >
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="success" text @click="dialog = false">
                      No
                    </v-btn>
                    <v-btn
                      :loading="delete_loading"
                      color="error"
                      text
                      @click="delete_feature"
                    >
                      Yes
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
          </v-expansion-panel-content>
        </v-col>
      </v-row>
    </v-container>
  </v-expansion-panel>
</template>

<script>
import Cookies from "vue-cookies";
import axios from "axios";

export default {
  mounted() {},
  data() {
    return {
      image: null,
      audio: null,
      is_approved: !!this.feature.is_approved,
      disabled: true,
      local_feature_name: this.feature.name,
      local_feature_description: this.feature.description,
      local_feature_interior: this.feature.is_interior,
      local_feature_mechanical: this.feature.is_mechanical,
      local_feature_natural: this.feature.is_natural,
      local_feature_societal: this.feature.is_societal,
      local_feature_season:
        this.feature.season.charAt(0).toUpperCase() +
        this.feature.season.slice(1),
      local_feature_time:
        this.feature.time.charAt(0).toUpperCase() + this.feature.time.slice(1),
      backup_feature_name: undefined,
      backup_feature_description: undefined,
      backup_feature_interior: undefined,
      backup_feature_mechanical: undefined,
      backup_feature_natural: undefined,
      backup_feature_societal: undefined,
      backup_feature_season: undefined,
      backup_feature_time: undefined,
      seasons: ["Summer", "Fall", "Winter", "Spring"],
      times: ["Day", "Night"],
      dialog: false,
      edit_loading: false,
      delete_loading: false,
      remove_loading: false,
      approve_loading: false,
    };
  },
  methods: {
    reset_feature_info: function () {
      this.local_feature_name = this.backup_feature_name;
      this.local_feature_description = this.backup_feature_description;
      this.local_feature_interior = this.backup_feature_interior;
      this.local_feature_mechanical = this.backup_feature_mechanical;
      this.local_feature_natural = this.backup_feature_natural;
      this.local_feature_societal = this.backup_feature_societal;
      this.local_feature_season = this.backup_feature_season;
      this.local_feature_time = this.backup_feature_time;
    },
    start_edit_info: function () {
      this.disabled = false;
      this.backup_feature_name = this.local_feature_name;
      this.backup_feature_description = this.local_feature_description;
      this.backup_feature_interior = this.local_feature_interior;
      this.backup_feature_mechanical = this.local_feature_mechanical;
      this.backup_feature_natural = this.local_feature_natural;
      this.backup_feature_societal = this.local_feature_societal;
      this.backup_feature_season = this.local_feature_season;
      this.backup_feature_time = this.local_feature_time;
    },
    cancel_edit_info: function () {
      this.disabled = true;
      this.reset_feature_info();
    },
    edit_feature_info: function () {
      this.edit_loading = true;
      if (
        this.local_feature_name != "" &&
        this.local_feature_description != "" &&
        this.local_feature_time != "" &&
        this.local_feature_season &&
        (this.local_feature_interior !== 0 ||
          this.local_feature_mechanical !== 0 ||
          this.local_feature_natural !== 0 ||
          this.local_feature_societal !== 0)
      ) {
        axios
          .request({
            url: `${process.env.VUE_APP_BASE_DOMAIN}/api/admin/feature`,
            method: `PATCH`,
            data: {
              name: this.local_feature_name,
              description: this.local_feature_description,
              is_interior: this.local_feature_interior,
              is_mechanical: this.local_feature_mechanical,
              is_natural: this.local_feature_natural,
              is_societal: this.local_feature_societal,
              season: this.local_feature_season.toLowerCase(),
              time: this.local_feature_time.toLowerCase(),
              token: Cookies.get("token"),
              feature_id: this.feature.feature_id,
            },
          })
          .then(() => {
            this.disabled = true;
            this.edit_loading = false;
            this.$root.$emit("snackbar", true, "Edit succesful", "success");
          })
          .catch(() => {
            this.edit_loading = false;
            this.$root.$emit("snackbar", true, "Edit failed", "error");
          });
      } else if (
        this.local_feature_name !== "" &&
        this.local_feature_description !== "" &&
        this.local_feature_interior === 0 &&
        this.local_feature_mechanical === 0 &&
        this.local_feature_natural === 0 &&
        this.local_feature_societal === 0 &&
        this.local_feature_season !== "" &&
        this.local_feature_time !== 0
      ) {
        this.edit_loading = false;
        this.$root.$emit(
          "snackbar",
          true,
          "Must select at least one category",
          "error"
        );
      } else {
        this.edit_loading = false;
        this.$root.$emit("snackbar", true, "Missing information", "error");
      }
    },
    edit_feature_image: function () {},
    delete_feature: function () {
      this.delete_loading = true;
      this.dialog = false;
      axios
        .request({
          url: `${process.env.VUE_APP_BASE_DOMAIN}/api/admin/feature`,
          method: `DELETE`,
          data: {
            token: Cookies.get(`token`),
            feature_id: this.feature.feature_id,
          },
        })
        .then(() => {
          this.delete_loading = false;
          this.$root.$emit("feature_delete", this.featurefeature_id);
          this.$root.$emit("snackbar", true, "Delete succesfull", "success");
        })
        .catch(() => {
          this.delete_loading = false;
          this.$root.$emit("snackbar", true, "Delete failed", "error");
        });
    },
    remove_feature: function () {
      this.remove_loading = true;
      axios
        .request({
          url: `${process.env.VUE_APP_BASE_DOMAIN}/api/admin/feature/reject`,
          method: `PATCH`,
          data: {
            token: Cookies.get("token"),
            feature_id: this.feature.feature_id,
          },
        })
        .then(() => {
          this.is_approved = false;
          this.remove_loading = false;
        })
        .catch(() => {
          this.remove_loading = false;
        });
    },
    approve_feature: function () {
      this.approve_loading = true;
      axios
        .request({
          url: `${process.env.VUE_APP_BASE_DOMAIN}/api/admin/feature/approve`,
          method: `PATCH`,
          data: {
            token: Cookies.get("token"),
            feature_id: this.feature.feature_id,
          },
        })
        .then(() => {
          this.approve_loading = false;
          this.is_approved = true;
          this.$root.$emit("snackbar", true, "Publish successfull", "success");
        })
        .catch(() => {
          this.approve_loading = false;
          this.$root.$emit("snackbar", true, "Publish failed", "error");
        });
    },
    get_feature_image: function () {
      axios
        .request({
          url: `${process.env.VUE_APP_BASE_DOMAIN}/api/admin/feature/image`,
          params: {
            token: Cookies.get("token"),
            feature_id: this.feature.feature_id,
          },
          responseType: "blob",
        })
        .then((res) => {
          this.image = URL.createObjectURL(res["data"]);
        })
        .catch(() => {});
    },
    get_feature_audio: function () {
      axios
        .request({
          url: `${process.env.VUE_APP_BASE_DOMAIN}/api/admin/feature/audio`,
          params: {
            feature_id: this.feature.feature_id,
            token: Cookies.get("token"),
          },
          responseType: "blob",
        })
        .then((res) => {
          this.audio = URL.createObjectURL(res["data"]);
        })
        .catch(() => {});
    },
    get_feature_media: function () {
      if (this.image == null && this.audio == null) {
        this.get_feature_image();
        this.get_feature_audio();
      }
    },
  },
  props: {
    feature: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.avatar_image {
  object-fit: cover;
}
</style>
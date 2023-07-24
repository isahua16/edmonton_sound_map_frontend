<template>
  <v-expansion-panel>
    <v-container>
      <v-row no-gutters>
        <v-col cols="12">
          <v-expansion-panel-header
            disable-icon-rotate
            @click="get_feature_media"
            ><h2>{{ local_feature_name }}</h2>
            <template v-if="feature.is_approved == 0" v-slot:actions>
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
                v-if="is_approved == false && disabled == true"
                color="error"
                @click="dialog = true"
                >Delete</v-btn
              >
              <v-dialog max-width="500" v-model="dialog">
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
      seasons: ["Summer", "Fall", "Winter", "Spring"],
      times: ["Day", "Night"],
      dialog: false,
      delete_loading: false,
    };
  },
  methods: {
    delete_feature: function () {
      this.delete_loading = true;
      this.dialog = false;
      axios
        .request({
          url: `${process.env.VUE_APP_BASE_DOMAIN}/api/user/feature`,
          method: `DELETE`,
          data: {
            token: Cookies.get(`token`),
            feature_id: this.feature.feature_id,
          },
        })
        .then(() => {
          this.delete_loading = false;
          this.$root.$emit("feature_delete", this.feature.feature_id);
          this.$root.$emit("snackbar", true, "Delete succesfull", "success");
        })
        .catch(() => {
          this.delete_loading = false;
          this.$root.$emit("snackbar", true, "Delete failed", "error");
        });
    },
    get_feature_image: function () {
      axios
        .request({
          url: `${process.env.VUE_APP_BASE_DOMAIN}/api/feature/image`,
          params: {
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
          url: `${process.env.VUE_APP_BASE_DOMAIN}/api/feature/audio`,
          params: {
            feature_id: this.feature.feature_id,
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
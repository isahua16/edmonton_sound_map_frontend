<template>
  <v-expansion-panel>
    <v-expansion-panel-header disable-icon-rotate @click="get_feature_media"
      ><h2>{{ feature.name }}</h2>
      <template v-if="is_approved == 0" v-slot:actions>
        <v-icon color="error"> mdi-alert-circle </v-icon>
      </template>
      <template v-else v-slot:actions>
        <v-icon color="success"> mdi-check-circle </v-icon>
      </template>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <h3>{{ feature.name }}</h3>
      <p>{{ feature.description }}</p>
      <img width="200px " :src="image" />
      <audio
        style="display: block; width: 300px; margin-top: 10px"
        controls
        controlsList="nodownload"
        :src="audio"
      ></audio>
      <approve-feature
        @status_changed="new_approval"
        :status="is_approved"
        :feature_id="feature.feature_id"
      ></approve-feature>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import Cookies from "vue-cookies";
import axios from "axios";
import ApproveFeature from "@/components/ApproveFeature.vue";
export default {
  mounted() {
    this.$on("status_changed", () => {
      console.log(`hello`);
    });
  },
  components: {
    ApproveFeature,
  },
  data() {
    return {
      image: null,
      audio: null,
      is_approved: this.feature.is_approved,
    };
  },
  methods: {
    new_approval: function (number) {
      console.log(`hello`);
      this.is_approved = number;
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
        .catch((err) => {
          console.log(err);
        });
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
        .catch((err) => {
          console.log(err);
        });
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
@media screen and (min-width: 768px) {
}
</style>
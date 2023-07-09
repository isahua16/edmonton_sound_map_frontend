<template>
  <div></div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      popup: undefined,
    };
  },
  methods: {
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
          console.log(res);
          let src = URL.createObjectURL(res["data"]);
          document
            .querySelector(`.popup_container`)
            .insertAdjacentHTML(
              `afterbegin`,
              `<img width="200px" src="${src}">`
            );
        })
        .catch((err) => {
          console.log(err);
        });
    },
    get_feature_audio: function () {
      axios
        .request({ url: "" })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.popup = this.marker.bindPopup(
      `<div class='popup_container'><p>${this.feature.location}</p></div>`
    );
    this.marker.on("popupopen", this.get_feature_image);
  },
  props: {
    marker: {
      type: Object,
    },
    feature: {
      type: Object,
    },
  },
};
</script>

<style scoped>
</style>
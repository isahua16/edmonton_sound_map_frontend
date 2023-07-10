<template>
  <div></div>
</template>

<script>
import axios from "axios";
import L from "leaflet";
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
            .querySelector(`.popup`)
            .insertAdjacentHTML(
              `afterbegin`,
              `<img class="popup_image" src="${src}">`
            );
        })
        .catch((err) => {
          console.log(err);
        });
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
          console.log(res);
          let src = URL.createObjectURL(res["data"]);
          document
            .querySelector(`.popup`)
            .insertAdjacentHTML(`beforeend`, `<audio controls src="${src}">`);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.popup = L.popup({
      autoClose: false,
      minWidth: 300,
      className: "popup",
    });
    this.marker.bindPopup(this.popup);
    this.marker.on("popupopen", this.get_feature_image);
    this.marker.on("popupopen", this.get_feature_audio);
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

<style>
.popup {
  width: 300px;
  height: 500px;
  display: grid;
  justify-items: center;
}

.popup_image {
  width: 100%;
}
</style>
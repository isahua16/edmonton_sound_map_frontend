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
      is_called: false,
    };
  },
  methods: {
    get_feature_image: function () {
      if (this.is_called == false) {
        axios
          .request({
            url: `${process.env.VUE_APP_BASE_DOMAIN}/api/feature/image`,
            params: {
              feature_id: this.feature.feature_id,
            },
            responseType: "blob",
          })
          .then((res) => {
            let src = URL.createObjectURL(res["data"]);
            this.get_feature_audio(src);
            this.is_called = true;
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    get_feature_audio: function (image) {
      axios
        .request({
          url: `${process.env.VUE_APP_BASE_DOMAIN}/api/feature/audio`,
          params: {
            feature_id: this.feature.feature_id,
          },
          responseType: "blob",
        })
        .then((res) => {
          let src = URL.createObjectURL(res["data"]);
          this.popup.setContent(
            `<h3>${this.feature.location}</h3>
            <img class="popup_image" src="${image}">
            <p>${this.feature.description}</p>
            <audio controls controlsList="nodownload" src="${src}">`
          );
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.popup = L.popup({});
    this.marker.bindPopup(this.popup);
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

<style>
.leaflet-popup-content {
  display: grid;
  align-items: center;
  min-width: 300px;
  gap: 10px;
}

.popup_image {
  width: 100%;
}
</style>
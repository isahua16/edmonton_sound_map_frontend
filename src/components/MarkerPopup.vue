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
      interior: "",
      mechanical: "",
      natural: "",
      societal: "",
      time: "",
    };
  },
  methods: {
    get_categories: function () {
      if (this.feature.is_interior === 1) {
        this.interior = `<span class="pill">interior</span>`;
      }
      if (this.feature.is_mechanical === 1) {
        this.mechanical = `<span class="pill">mechanical</span>`;
      }
      if (this.feature.is_natural === 1) {
        this.natural = `<span class="pill">natural</span>`;
      }
      if (this.feature.is_societal === 1) {
        this.societal = `<span class="pill">societal</span>`;
      }
      if (this.feature.time === "day") {
        this.time = `<img class="sun_icon" src="/sun.png"/>`;
      } else {
        this.time = `<img class="moon_icon" src="/moon.png"/>`;
      }
    },
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
            `<div id="${this.feature.feature_id}" class="popup_header"><h3>${this.feature.name}</h3>${this.time}</div>
            <div class="pill_container">
                <span class="pill">${this.feature.season}</span>
                ${this.interior}
                ${this.mechanical}
                ${this.natural}
                ${this.societal}
            </div>
            <img class="popup_image" src="${image}">
            <i>${this.feature.location}</i>
            <p>${this.feature.description}</p>
            <audio controls controlsList="nodownload" src="${src}">`
          );
        })
        .catch();
    },
  },
  mounted() {
    this.popup = L.popup({});
    this.get_categories();
    this.marker.bindPopup(this.popup);
    this.marker.on("popupopen", this.get_feature_image);
    this.$root.$on("random_popup", (id) => {
      if (this.feature.feature_id === id) {
        this.marker.openPopup();
      }
    });
  },
  props: {
    marker: {
      type: Object,
    },
    feature: {
      type: Object,
    },
    map: {
      type: Object,
    },
  },
};
</script>

<style>
.popup_header {
  display: grid;
  width: 100%;
  grid-auto-flow: column;
  padding-top: 5px;
  padding-bottom: 5px;
}
.moon_icon {
  justify-self: end;
  width: 15px;
}
.sun_icon {
  justify-self: end;
  width: 20px;
}
.pill_container {
  align-items: center;
  justify-items: center;
  display: grid;
  gap: 2px;
  grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
}
.pill {
  background-color: #eeeeee;
  padding: 5px 10px;
  border-radius: 100px;
  font-size: 0.8rem;
  width: 100%;
  text-align: center;
}
.leaflet-popup-content {
  margin-top: 10px;
  margin-bottom: 20px;
  display: grid;
  align-items: center;
  min-width: 300px;
  gap: 10px;
}
.popup_image {
  width: 100%;
}
</style>
<template>
  <div></div>
</template>

<script>
import axios from "axios";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
export default {
  props: {
    map: {
      type: Object,
    },
  },
  mounted() {
    this.get_features();
  },
  methods: {
    create_markers: function (features, map) {
      for (let i = 0; i < features.length; i++) {
        let coordinates = L.latLng([
          Number(features[i].lat),
          Number(features[i].long),
        ]);
        L.marker(coordinates).addTo(map);
      }
    },
    get_features: function () {
      axios
        .request({ url: `${process.env.VUE_APP_BASE_DOMAIN}/api/features` })
        .then((res) => {
          console.log(res);
          let features = res.data;
          this.create_markers(features, this.map);
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
<template>
  <div>
    <map-marker
      v-for="(feature, i) in features"
      :key="i"
      :map="map"
      :feature="feature"
    ></map-marker>
  </div>
</template>

<script>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import MapMarker from "@/components/MapMarker.vue";
export default {
  data() {
    return {
      features: [],
      random_id: 10000,
    };
  },
  components: {
    MapMarker,
  },
  props: {
    map: {
      type: Object,
    },
  },
  mounted() {
    this.get_features();
    this.$root.$on("get_id", () => {
      this.emit_random_popup();
    });
    this.$root.$on("reset_filter", () => {
      this.random_id = 10000;
    });
  },
  methods: {
    emit_random_popup: function () {
      let marker_count = 0;
      this.map.eachLayer(function (layer) {
        if (layer instanceof L.Marker) {
          marker_count += 1;
        }
      });
      if (marker_count !== 0) {
        this.$root.$emit("random_popup", this.get_random_id());
      } else {
        console.log("no markers");
      }
    },
    get_random_id: function () {
      let id =
        this.features[Math.floor(Math.random() * this.features.length)][
          `feature_id`
        ];
      while (this.random_id === id) {
        id =
          this.features[Math.floor(Math.random() * this.features.length)][
            `feature_id`
          ];
      }
      this.random_id = id;
      return this.random_id;
    },
    get_features: function () {
      axios
        .request({ url: `${process.env.VUE_APP_BASE_DOMAIN}/api/features` })
        .then((res) => {
          this.features = res.data;
        })
        .catch(() => {});
    },
  },
};
</script>

<style scoped>
</style>
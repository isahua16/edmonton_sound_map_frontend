<template>
  <marker-popup
    v-if="marker"
    :marker="marker"
    :feature="feature"
    :map="map"
  ></marker-popup>
</template>

<script>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import MarkerPopup from "@/components/MarkerPopup.vue";
export default {
  data() {
    return {
      marker: undefined,
    };
  },
  components: {
    MarkerPopup,
  },
  mounted() {
    let coordinates = L.latLng([
      Number(this.feature.lat),
      Number(this.feature.long),
    ]);
    this.marker = L.marker(coordinates);
    this.marker.addTo(this.map);

    this.$root.$on("filter_features", (filters) => {
      filters = Object.entries(filters);
      for (let i = 0; i < filters.length; i++) {
        if (this.feature[filters[i][0]] === 1 && filters[i][1] === true) {
          this.map.addLayer(this.marker);
          return;
        }
      }
      this.map.removeLayer(this.marker);
    });
  },
  props: {
    map: {
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
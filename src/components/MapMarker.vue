<template>
  <marker-popup
    v-if="marker"
    :marker="marker"
    :feature="feature"
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
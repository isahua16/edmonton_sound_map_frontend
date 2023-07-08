<template>
  <div id="map"></div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
export default {
  name: "MainMap",
  data() {
    return {
      center: [53.5462055, -113.491241],
    };
  },
  methods: {
    setup_map: function () {
      let corner1 = L.latLng(53.88167850008248, -112.59475708007814);
      let corner2 = L.latLng(53.207677555890015, -114.39376831054688);
      let bounds = L.latLngBounds(corner1, corner2);
      let map = L.map("map", {
        attributionControl: false,
        zoomControl: false,
      })
        .setView(this.center, 11)
        .setMaxBounds(bounds);
      L.tileLayer(
        "https://tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token=8nDStn933xTbhSC1BHugLOD5N40As4Lkm1HFlYv22SBm6jAlIZReTwdLZiLHjnlu",
        {
          minZoom: 12,
          maxZoom: 22,
          accessToken:
            "8nDStn933xTbhSC1BHugLOD5N40As4Lkm1HFlYv22SBm6jAlIZReTwdLZiLHjnlu",
        }
      ).addTo(map);
    },
  },
  mounted() {
    this.setup_map();
  },
};
</script>

<style scoped>
#map {
  width: 100%;
  min-height: 91.55vh;
}
</style>
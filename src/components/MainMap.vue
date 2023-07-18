<template>
  <div id="map">
    <map-markers :map="map"> </map-markers>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import MapMarkers from "@/components/MapMarkers.vue";
export default {
  components: {
    MapMarkers,
  },
  data() {
    return {
      center: [53.5462055, -113.491241],
      map: {},
      play_icon: "mdi-play",
    };
  },
  methods: {
    setup_map: function () {
      let corner1 = L.latLng(53.88167850008248, -112.59475708007814);
      let corner2 = L.latLng(53.207677555890015, -114.39376831054688);
      let bounds = L.latLngBounds(corner1, corner2);
      this.map = L.map("map", {
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
      ).addTo(this.map);
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
  min-height: calc(100vh - 144px);
  z-index: 0;
}
.floating_filter {
  z-index: 500;
  top: 80px;
  right: 10px;
}
.floating_play {
  z-index: 500;
  bottom: 80px;
  right: 10px;
}
</style>
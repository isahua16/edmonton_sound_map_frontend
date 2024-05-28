<template>
  <div id="map" :map="map"></div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-control-geocoder";
export default {
  data() {
    return {
      center: [53.5462055, -113.491241],
      map: undefined,
      marker: undefined,
      geocoder: undefined,
    };
  },
  methods: {
    map_click: function (e) {
      if (this.marker != undefined) {
        this.marker.remove();
      }
      this.$root.$emit(
        "click_latlng",
        e.latlng.lat,
        e.latlng.lng,
        "Loading..."
      );
      this.marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(this.map);
      this.geocoder.options.geocoder.reverse(
        e.latlng,
        this.map.options.crs.scale(this.map.getZoom()),
        (results) => {
          this.$root.$emit(
            "click_latlng",
            e.latlng.lat,
            e.latlng.lng,
            results[0][`name`]
          );
        }
      );
    },
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
          maxZoom: 18,
          accessToken:
            "8nDStn933xTbhSC1BHugLOD5N40As4Lkm1HFlYv22SBm6jAlIZReTwdLZiLHjnlu",
        }
      ).addTo(this.map);
      this.geocoder = L.Control.geocoder();
    },
  },
  mounted() {
    this.setup_map();
    this.map.on("click", this.map_click);
  },
};
</script>

<style scoped>
#map {
  width: 100%;
  min-height: 200px;
  z-index: 0;
}
</style>
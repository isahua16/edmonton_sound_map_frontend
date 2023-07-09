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
import axios from "axios";
import MapMarker from "@/components/MapMarker.vue";
export default {
  data() {
    return {
      features: [],
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
  },
  methods: {
    get_features: function () {
      axios
        .request({ url: `${process.env.VUE_APP_BASE_DOMAIN}/api/features` })
        .then((res) => {
          console.log(res);
          this.features = res.data;
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
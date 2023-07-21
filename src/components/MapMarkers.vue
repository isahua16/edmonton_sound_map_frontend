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
    this.$root.$on("get_id", this.emit_random_popup);
    this.$root.$on("reset_filter", () => {
      this.random_id = 10000;
    });
  },
  methods: {
    emit_random_popup: function (filters) {
      let empty_array = [];
      filters = Object.entries(filters);
      for (let y = 0; y < this.features.length; y++) {
        for (let i = 0; i < filters.length; i++) {
          if (this.features[y][filters[i][0]] === 1 && filters[i][1] === true) {
            empty_array.push(this.features[y]);
            break;
          }
        }
      }
      if (empty_array.length !== 0 && empty_array.length !== 1) {
        let id =
          empty_array[Math.floor(Math.random() * empty_array.length)][
            `feature_id`
          ];
        while (this.random_id === id) {
          id =
            empty_array[Math.floor(Math.random() * empty_array.length)][
              `feature_id`
            ];
        }
        this.$root.$emit("random_popup", id);
        this.random_id = id;
      } else if (empty_array.length === 1) {
        this.$root.$emit("random_popup", empty_array[0][`feature_id`]);
      } else {
        this.$root.$emit("snackbar", true, "No markers on map", "error");
      }
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
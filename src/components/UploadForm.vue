<template>
  <v-container>
    <h2 class="mt-16 mb-5">Submission</h2>
    <secondary-map></secondary-map>
  </v-container>
</template>

<script>
import SecondaryMap from "@/components/SecondaryMap.vue";
export default {
  data() {
    return {
      lat: undefined,
      long: undefined,
      location: undefined,
      description: undefined,
      name: undefined,
      is_interior: false,
      is_mechanical: false,
      is_natural: false,
      is_societal: false,
      season: undefined,
      time: undefined,
    };
  },
  components: {
    SecondaryMap,
  },
  mounted() {},
};
</script>

<style scoped>
</style>
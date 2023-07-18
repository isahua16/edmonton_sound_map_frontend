<template>
  <v-main>
    <main-map> </main-map>
    <v-speed-dial
      absolute
      :top="false"
      :bottom="true"
      :left="false"
      :right="true"
      v-model="fab"
    >
      <template v-slot:activator>
        <v-btn v-model="fab" color="blue darken-2" dark fab>
          <v-icon v-if="fab" large> mdi-menu-down </v-icon>
          <v-icon v-else large> mdi-menu-up </v-icon>
        </v-btn>
      </template>
      <v-btn fab dark small color="green">
        <v-icon>mdi-filter</v-icon>
      </v-btn>
      <v-btn fab dark small color="indigo">
        <v-icon>mdi-play</v-icon>
      </v-btn>
    </v-speed-dial>
  </v-main>
</template>

<script>
import MainMap from "@/components/MainMap.vue";
export default {
  data() {
    return {
      fab: false,
    };
  },
  components: {
    MainMap,
  },
};
</script>

<style scoped>
</style>
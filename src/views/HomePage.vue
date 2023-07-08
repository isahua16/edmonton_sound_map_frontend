<template>
  <v-app>
    <app-bar></app-bar>
    <v-main>
      <main-map></main-map>
    </v-main>
    <app-nav></app-nav>
  </v-app>
</template>

<script>
import MainMap from "@/components/MainMap.vue";
import AppBar from "@/components/AppBar.vue";
import AppNav from "@/components/AppNav.vue";

export default {
  components: {
    MainMap,
    AppBar,
    AppNav,
  },
};
</script>

<style scoped>
</style>
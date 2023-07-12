<template>
  <v-app>
    <app-bar></app-bar>
    <v-main>
      <connect-form></connect-form>
    </v-main>
    <app-nav></app-nav>
  </v-app>
</template>

<script>
import AppBar from "@/components/AppBar.vue";
import AppNav from "@/components/AppNav.vue";
import ConnectForm from "@/components/ConnectForm.vue";
export default {
  components: {
    AppBar,
    AppNav,
    ConnectForm,
  },
};
</script>

<style scoped>
</style>
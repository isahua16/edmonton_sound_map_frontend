<template>
  <v-app>
    <app-bar></app-bar>
    <router-view />
    <v-snackbar :color="color" app v-model="snackbar">
      <h3 class="text-center">{{ message }}</h3>
    </v-snackbar>
    <app-nav></app-nav>
  </v-app>
</template>

<script>
import AppBar from "@/components/AppBar.vue";
import AppNav from "@/components/AppNav.vue";
export default {
  components: {
    AppBar,
    AppNav,
  },
  name: "App",
  data() {
    return {
      message: undefined,
      snackbar: false,
      color: "error",
    };
  },
  beforeCreate() {
    this.$root.$on("snackbar", (state, message, color) => {
      this.snackbar = state;
      this.message = message;
      this.color = color;
    });
  },
  mounted() {},
};
</script>

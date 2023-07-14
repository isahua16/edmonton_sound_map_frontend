<template>
  <v-bottom-navigation app v-if="!token" height="72" :value="value">
    <router-link to="/"
      ><v-btn value="/" class="pa-10">
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn></router-link
    >
    <router-link to="/signup"
      ><v-btn value="/signup" class="pa-10">
        <span>Sign Up</span>
        <v-icon>mdi-account-plus</v-icon>
      </v-btn></router-link
    >
    <router-link to="/login">
      <v-btn value="/login" class="pa-10">
        <span>Log In</span>
        <v-icon>mdi-login</v-icon>
      </v-btn>
    </router-link>
    <router-link to="/about">
      <v-btn value="/about" class="pa-10">
        <span>About</span>
        <v-icon>mdi-information</v-icon>
      </v-btn>
    </router-link>
  </v-bottom-navigation>
  <v-bottom-navigation app v-else height="72" :value="value">
    <router-link to="/"
      ><v-btn value="/" class="pa-10">
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn></router-link
    >
    <router-link to="/signup"
      ><v-btn value="/signup" class="pa-10">
        <span>Sign Up</span>
        <v-icon>mdi-account-plus</v-icon>
      </v-btn></router-link
    >
    <router-link to="/login">
      <v-btn value="/login" class="pa-10">
        <span>Log In</span>
        <v-icon>mdi-login</v-icon>
      </v-btn>
    </router-link>
    <router-link to="/about">
      <v-btn value="/about" class="pa-10">
        <span>HELLLOOOO</span>
        <v-icon>mdi-information</v-icon>
      </v-btn>
    </router-link>
  </v-bottom-navigation>
</template>

<script>
import Cookies from "vue-cookies";
export default {
  data() {
    return {
      value: this.$route.path,
      token: Cookies.get("token"),
    };
  },
};
</script>

<style scoped>
</style>
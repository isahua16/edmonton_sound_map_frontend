<template>
  <v-bottom-navigation app grow height="72" :value="value">
    <router-link to="/"
      ><v-btn class="pa-10">
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn></router-link
    >
    <router-link to="/signup"
      ><v-btn class="pa-10">
        <span>Sign Up</span>
        <v-icon>mdi-account-plus</v-icon>
      </v-btn></router-link
    >
    <router-link to="/login">
      <v-btn class="pa-10">
        <span>Log In</span>
        <v-icon>mdi-login</v-icon>
      </v-btn>
    </router-link>
    <router-link to="/about">
      <v-btn class="pa-10">
        <span>About</span>
        <v-icon>mdi-information</v-icon>
      </v-btn>
    </router-link>
  </v-bottom-navigation>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
    };
  },
};
</script>

<style scoped>
</style>
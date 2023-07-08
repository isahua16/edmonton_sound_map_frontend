<template>
  <v-bottom-navigation app grow height="72" v-model="value">
    <v-btn class="pa-10" value="home">
      <span>Home</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-btn class="pa-10" value="signup">
      <span>Sign Up</span>
      <v-icon>mdi-account-plus</v-icon>
    </v-btn>
    <v-btn class="pa-10" value="login">
      <span>Log In</span>
      <v-icon>mdi-login</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data() {
    return {
      value: "home",
    };
  },
};
</script>

<style scoped>
</style>
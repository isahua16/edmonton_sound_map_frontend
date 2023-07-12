<template>
  <v-main>
    <v-container>
      <v-text-field
        :elevation="hover ? 24 : 6"
        label="email"
        type="text"
        ref="input_username"
      ></v-text-field>
      <v-text-field
        :elevation="hover ? 24 : 6"
        label="username"
        type="text"
        ref="input_username"
      ></v-text-field>
      <v-text-field
        :elevation="hover ? 24 : 6"
        label="password"
        type="password"
        ref="input_password"
      ></v-text-field>
      <v-btn depressed color="primary"> Submit </v-btn>
    </v-container>
  </v-main>
</template>
<script>
export default {};
</script>

<style scoped>
</style>
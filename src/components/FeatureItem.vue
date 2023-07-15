<template>
  <v-expansion-panel>
    <v-expansion-panel-header>{{ feature.name }}</v-expansion-panel-header>
  </v-expansion-panel>
</template>

<script>
export default {
  props: {
    feature: {
      type: Object,
    },
  },
};
</script>

<style scoped>
</style>
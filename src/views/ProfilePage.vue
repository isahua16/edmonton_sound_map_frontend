<template>
  <v-main>
    <profile-update></profile-update>
  </v-main>
</template>

<script>
import Cookies from "vue-cookies";
import ProfileUpdate from "@/components/ProfileUpdate.vue";
export default {
  mounted() {
    if (Cookies.get("token") === null) {
      this.$root.$emit("snackbar", true, "Please log in", "error");
      this.$root.$emit("token_update");
      this.$router.push(`/`);
    }
    console.log(this.features);
    this.get_user_features();
    this.$root.$on("feature_delete", this.delete_feature);
  },
  components: {
    ProfileUpdate,
  },
};
</script>

<style scoped>
</style>
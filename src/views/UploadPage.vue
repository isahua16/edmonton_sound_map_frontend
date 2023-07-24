<template>
  <v-main>
    <upload-form></upload-form>
  </v-main>
</template>

<script>
import Cookies from "vue-cookies";
import UploadForm from "@/components/UploadForm.vue";
export default {
  mounted() {
    if (Cookies.get("token") === null) {
      this.$root.$emit("token_update");
      this.$router.push(`/`);
    }
  },
  components: {
    UploadForm,
  },
};
</script>

<style scoped>
</style>
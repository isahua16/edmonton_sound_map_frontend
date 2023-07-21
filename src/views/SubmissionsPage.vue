<template>
  <v-main>
    <v-container v-if="features.length === 0">
      <v-row justify="center">
        <v-col cols="auto">
          <h2>No submissions</h2>
        </v-col>
      </v-row>
    </v-container>
    <v-expansion-panels v-else>
      <user-feature-item
        v-for="(feature, i) in features"
        :key="i"
        :feature="feature"
      ></user-feature-item>
    </v-expansion-panels>
  </v-main>
</template>

<script>
import axios from "axios";
import Cookies from "vue-cookies";
import UserFeatureItem from "@/components/UserFeatureItem.vue";
export default {
  mounted() {
    if (Cookies.get("token") == null) {
      this.$router.path(`/`);
    }
    console.log(this.features);
    this.get_user_features();
    this.$root.$on("feature_delete", this.delete_feature);
  },
  components: {
    UserFeatureItem,
  },
  data() {
    return {
      features: null,
    };
  },
  methods: {
    delete_feature: function (feature_id) {
      let filtered_features = this.features.filter((feature) => {
        if (feature.feature_id !== feature_id) {
          return feature;
        }
      });
      this.features = filtered_features;
    },
    get_user_features: function () {
      axios
        .request({
          url: `${process.env.VUE_APP_BASE_DOMAIN}/api/user/features`,
          params: {
            token: Cookies.get("token"),
          },
        })
        .then((res) => {
          this.features = res[`data`];
        })
        .catch();
    },
  },
};
</script>

<style scoped>
</style>
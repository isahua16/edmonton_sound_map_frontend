<template>
  <v-main>
    <v-container v-if="features.length === 0">
      <v-row justify="center">
        <v-col cols="auto">
          <h2>No submissions</h2>
        </v-col>
      </v-row>
    </v-container>
    <v-row v-else justify="center">
      <v-col cols="12">
        <v-expansion-panels>
          <feature-item
            v-for="(feature, i) in features"
            :key="i"
            :index="i"
            :feature="feature"
          ></feature-item>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
import Cookies from "vue-cookies";
import axios from "axios";
import FeatureItem from "@/components/FeatureItem.vue";

export default {
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
    get_all_features: function () {
      if (this.feature == null) {
        axios
          .request({
            url: `${process.env.VUE_APP_BASE_DOMAIN}/api/admin/features`,
            params: {
              token: Cookies.get("token"),
            },
          })
          .then((res) => {
            this.features = res[`data`];
            console.log(res);
          })
          .catch();
      }
    },
  },
  components: {
    FeatureItem,
  },
  mounted() {
    if (Cookies.get("is_admin") == null || Cookies.get("token") == null) {
      this.$router.path(`/`);
    }
    this.get_all_features();
    this.$root.$on("feature_delete", this.delete_feature);
    this.$root.$on("status_change", (index, status) => {
      this.features[index]["is_approved"] = status;
    });
  },
};
</script>

<style scoped>
</style>
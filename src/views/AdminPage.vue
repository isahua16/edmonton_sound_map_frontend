<template>
  <v-main>
    <v-tabs grow>
      <v-tab>Features</v-tab>
      <v-tab @click="get_all_users">Users</v-tab>
      <v-tab-item>
        <v-row justify="center">
          <v-col cols="12">
            <v-expansion-panels>
              <feature-item
                v-for="(feature, i) in features"
                :key="i"
                :feature="feature"
              ></feature-item>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-tab-item>
      <v-tab-item><user-item></user-item></v-tab-item>
    </v-tabs>
  </v-main>
</template>

<script>
import Cookies from "vue-cookies";
import axios from "axios";
import FeatureItem from "@/components/FeatureItem.vue";
import UserItem from "@/components/UserItem.vue";
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
    get_all_users: function () {},
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
          })
          .catch();
      }
    },
  },
  components: {
    FeatureItem,
    UserItem,
  },
  mounted() {
    if (Cookies.get("is_admin") == null) {
      this.$router.path(`/`);
    }
    this.get_all_features();
    this.$root.$on("feature_delete", this.delete_feature);
  },
};
</script>

<style scoped>
</style>
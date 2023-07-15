<template>
  <v-main>
    <v-tabs grow>
      <v-tab>Features</v-tab>
      <v-tab @click="get_all_users">Users</v-tab>
      <v-tab-item>
        <v-expansion-panels>
          <feature-item
            v-for="(feature, i) in features"
            :key="i"
            :feature="feature"
          ></feature-item>
        </v-expansion-panels>
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
    get_all_users: function () {},
    get_all_features: function () {
      if (this.features == null) {
        axios
          .request({
            url: `${process.env.VUE_APP_BASE_DOMAIN}/api/admin/features`,
            params: {
              token: Cookies.get("token"),
            },
          })
          .then((res) => {
            console.log(res);
            this.features = res[`data`];
          })
          .catch((err) => {
            console.log(err);
          });
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
  },
};
</script>

<style scoped>
</style>
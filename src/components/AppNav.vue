<template>
  <div>
    <v-bottom-navigation app v-if="!token" min-height="72" :value="value">
      <router-link class="non_mobile" to="/"
        ><v-btn value="/" class="pa-10">
          <span>Home</span>
          <v-icon>mdi-home</v-icon>
        </v-btn></router-link
      >
      <router-link class="non_mobile" to="/about">
        <v-btn value="/about" class="pa-10">
          <span>About</span>
          <v-icon>mdi-information</v-icon>
        </v-btn>
      </router-link>
      <router-link class="non_mobile" to="/signup"
        ><v-btn value="/signup" class="pa-10">
          <span>Sign Up</span>
          <v-icon>mdi-account-plus</v-icon>
        </v-btn></router-link
      >
      <router-link class="non_mobile" to="/login">
        <v-btn value="/login" class="pa-10">
          <span>Log In</span>
          <v-icon>mdi-login</v-icon>
        </v-btn>
      </router-link>

      <v-btn class="on_mobile pa-10" @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-bottom-navigation>

    <v-bottom-navigation app v-else height="72" :value="value">
      <router-link class="non_mobile" to="/"
        ><v-btn value="/" class="pa-10">
          <span>Home</span>
          <v-icon>mdi-home</v-icon>
        </v-btn></router-link
      >
      <router-link class="non_mobile" to="/upload"
        ><v-btn value="/upload" class="pa-10">
          <span>Upload</span>
          <v-icon>mdi-upload</v-icon>
        </v-btn></router-link
      >
      <router-link class="non_mobile" to="/submissions"
        ><v-btn value="/submissions" class="pa-10">
          <span>Submissions</span>
          <v-icon>mdi-playlist-music</v-icon>
        </v-btn></router-link
      >
      <router-link class="non_mobile" to="/profile">
        <v-btn value="/profile" class="pa-10">
          <span>Profile</span>
          <v-icon>mdi-account-circle</v-icon>
        </v-btn>
      </router-link>
      <router-link v-if="is_admin" class="non_mobile" to="/admin">
        <v-btn value="/admin" class="pa-10">
          <span>Admin</span>
          <v-icon>mdi-lock</v-icon>
        </v-btn>
      </router-link>
      <div class="non_mobile">
        <v-btn @click="logout" value="/logout" class="pa-10">
          <span>Logout</span>
          <v-icon>mdi-logout</v-icon>
        </v-btn>
      </div>

      <v-btn class="on_mobile pa-10" @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-bottom-navigation>

    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list v-if="!token">
        <router-link to="/">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link to="/about">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-information</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>About</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link to="/signup">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account-plus</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Signup</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link to="/login">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-login</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Login</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>

      <v-list v-else>
        <router-link to="/">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link to="/upload">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-upload</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Upload</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link to="/submissions">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-playlist-music</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Submissions</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link to="/profile">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Profile</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link v-if="is_admin" to="/admin">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-lock</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Admin</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <v-list-item @click="logout" class="logout_button">
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import Cookies from "vue-cookies";
import axios from "axios";
export default {
  mounted() {
    this.$root.$on("token_update", () => {
      this.token = Cookies.get("token");
      this.is_admin = Cookies.get("is_admin");
    });
  },
  methods: {
    logout: function () {
      axios
        .request({
          url: `${process.env.VUE_APP_BASE_DOMAIN}/api/login`,
          method: `DELETE`,
          data: {
            token: Cookies.get("token"),
          },
        })
        .then(() => {})
        .catch(() => {});
      Cookies.remove("token");
      Cookies.remove("is_admin");
      if (this.$route.path !== `/`) {
        this.$router.push(`/`);
      }
      this.$root.$emit("token_update");
    },
  },
  data() {
    return {
      value: this.$route.path,
      token: Cookies.get("token"),
      drawer: false,
      is_admin: Cookies.get("is_admin"),
    };
  },
};
</script>

<style scoped>
.logout_button {
  cursor: pointer;
}
a {
  text-decoration: none;
}
.non_mobile {
  display: none;
}

@media screen and (min-width: 768px) {
  .non_mobile {
    display: block;
  }
  .on_mobile {
    display: none;
  }
}
</style>
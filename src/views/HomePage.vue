<template>
  <v-main>
    <main-map> </main-map>
    <v-speed-dial
      absolute
      :top="false"
      :bottom="true"
      :left="false"
      :right="true"
      v-model="fab"
    >
      <template v-slot:activator>
        <v-btn v-model="fab" color="blue darken-2" dark fab>
          <v-icon v-if="fab" large> mdi-menu-down </v-icon>
          <v-icon v-else large> mdi-menu-up </v-icon>
        </v-btn>
      </template>
      <v-btn @click="menu = true" fab dark small color="primary">
        <v-icon>mdi-filter</v-icon>
      </v-btn>
      <v-btn @click="$root.$emit('get_id')" fab dark small color="primary">
        <v-icon>mdi-dice-multiple</v-icon>
      </v-btn>
    </v-speed-dial>
    <v-menu
      absolute
      :position-x="100000000"
      :position-y="100000000"
      :close-on-content-click="false"
      v-model="menu"
      transition="scale-transition"
    >
      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-action>
              <v-switch v-model="is_interior" color="primary"></v-switch>
            </v-list-item-action>
            <v-list-item-title>Interior</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-switch v-model="is_mechanical" color="primary"></v-switch>
            </v-list-item-action>
            <v-list-item-title>Mechanical</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-switch v-model="is_natural" color="primary"></v-switch>
            </v-list-item-action>
            <v-list-item-title>Natural</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-switch v-model="is_societal" color="primary"></v-switch>
            </v-list-item-action>
            <v-list-item-title>Societal</v-list-item-title>
          </v-list-item>
        </v-list>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text @click="menu = false"> Cancel </v-btn>
          <v-btn color="primary" text @click="apply_filter"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </v-main>
</template>

<script>
import MainMap from "@/components/MainMap.vue";
export default {
  methods: {
    apply_filter: function () {
      this.menu = false;
      this.$root.$emit("filter_features", {
        is_interior: this.is_interior,
        is_mechanical: this.is_mechanical,
        is_natural: this.is_natural,
        is_societal: this.is_societal,
      });
      this.$root.$emit("reset_filter");
    },
  },
  data() {
    return {
      fab: false,
      menu: false,
      is_interior: true,
      is_mechanical: true,
      is_natural: true,
      is_societal: true,
    };
  },
  components: {
    MainMap,
  },
};
</script>

<style scoped>
</style>
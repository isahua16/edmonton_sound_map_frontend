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
      <v-btn @click="menu = true" fab dark small color="green">
        <v-icon>mdi-filter</v-icon>
      </v-btn>
      <v-btn fab dark small color="indigo">
        <v-icon>mdi-dice-multiple</v-icon>
      </v-btn>
    </v-speed-dial>
    <v-menu
      absolute
      :close-on-content-click="false"
      v-model="menu"
      transition="scale-transition"
    >
      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-action>
              <v-switch v-model="message" color="purple"></v-switch>
            </v-list-item-action>
            <v-list-item-title>Interior</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-switch v-model="hints" color="purple"></v-switch>
            </v-list-item-action>
            <v-list-item-title>Mechanical</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-switch v-model="hints" color="purple"></v-switch>
            </v-list-item-action>
            <v-list-item-title>Natural</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-switch v-model="hints" color="purple"></v-switch>
            </v-list-item-action>
            <v-list-item-title>Societal</v-list-item-title>
          </v-list-item>
        </v-list>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text @click="menu = false"> Cancel </v-btn>
          <v-btn color="primary" text @click="menu = false"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </v-main>
</template>

<script>
import MainMap from "@/components/MainMap.vue";
export default {
  data() {
    return {
      fab: false,
      menu: false,
    };
  },
  components: {
    MainMap,
  },
};
</script>

<style scoped>
</style>
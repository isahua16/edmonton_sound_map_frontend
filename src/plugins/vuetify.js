import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import DiscordIcon from "@/components/DiscordIcon.vue";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    values: {
      discord: {
        component: DiscordIcon,
      },
    },
  },
});

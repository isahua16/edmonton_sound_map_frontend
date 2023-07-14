<template>
  <v-container>
    <h2 class="mt-5 mb-5">Submission</h2>
    <secondary-map class="mb-5"></secondary-map>
    <v-text-field disabled v-model="name" label="Name"></v-text-field>
    <v-textarea
      v-model="description"
      auto-grow
      rows="1"
      label="Description"
    ></v-textarea>
    <v-container class="descriptors">
      <v-select v-model="season" label="Season" :items="seasons"></v-select>
      <v-select v-model="time" label="Time of Day" :items="times"></v-select>
    </v-container>
    <v-container class="categories">
      <v-checkbox dense label="Interior" v-model="is_interior"></v-checkbox>
      <v-checkbox dense label="Natural" v-model="is_natural"></v-checkbox>
      <v-checkbox dense label="Societal" v-model="is_societal"></v-checkbox>
      <v-checkbox dense label="Mechanical" v-model="is_mechanical"></v-checkbox>
    </v-container>
    <v-container class="files">
      <v-file-input label="Image"></v-file-input>
      <v-file-input label="Audio"></v-file-input>
    </v-container>
    <v-btn class="my-5" color="primary">Submit</v-btn>
    <v-alert
      :value="alert"
      color="red"
      icon="mdi-alert-circle"
      transition="scale-transition"
    >
      {{ message }}
    </v-alert>
  </v-container>
</template>

<script>
import SecondaryMap from "@/components/SecondaryMap.vue";
export default {
  methods: {
    get_latlng: function (lat, long) {
      this.lat = lat;
      this.long = long;
    },
  },
  data() {
    return {
      lat: undefined,
      long: undefined,
      location: undefined,
      description: undefined,
      name: undefined,
      is_interior: false,
      is_mechanical: false,
      is_natural: false,
      is_societal: false,
      season: undefined,
      time: undefined,
      seasons: ["Summer", "Fall", "Winter", "Spring"],
      times: ["Day", "Night"],
      alert: false,
      message: undefined,
    };
  },
  components: {
    SecondaryMap,
  },
  mounted() {
    this.$root.$on("click_latlng", this.get_latlng);
  },
};
</script>

<style scoped>
.categories {
  display: grid !important;
  grid-template-columns: 1fr 1fr;
  padding-left: 0px;
  padding-right: 0px;
}
.descriptors {
  padding: 0px;
}
.files {
  padding: 0px;
}
@media screen and (min-width: 600px) {
  .categories {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  .descriptors {
    display: grid !important;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  .files {
    display: grid !important;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
}
</style>
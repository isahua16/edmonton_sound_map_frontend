<template>
  <v-container>
    <h2 class="mt-5 mb-5">Submission</h2>
    <secondary-map class="mb-5"></secondary-map>
    <v-text-field v-model="name" label="Name*"></v-text-field>
    <v-text-field disabled v-model="location" label="Location*"></v-text-field>
    <v-textarea
      v-model="description"
      auto-grow
      rows="1"
      label="Description*"
    ></v-textarea>
    <v-container class="descriptors">
      <v-select v-model="season" label="Season*" :items="seasons"></v-select>
      <v-select v-model="time" label="Time of Day*" :items="times"></v-select>
    </v-container>
    <v-container class="categories">
      <v-checkbox
        dense
        :false-value="0"
        :true-value="1"
        label="Interior"
        v-model="is_interior"
      ></v-checkbox>
      <v-checkbox
        :false-value="0"
        :true-value="1"
        dense
        label="Natural"
        v-model="is_natural"
      ></v-checkbox>
      <v-checkbox
        :false-value="0"
        :true-value="1"
        dense
        label="Societal"
        v-model="is_societal"
      ></v-checkbox>
      <v-checkbox
        :false-value="0"
        :true-value="1"
        dense
        label="Mechanical"
        v-model="is_mechanical"
      ></v-checkbox>
    </v-container>
    <v-container class="files">
      <v-file-input
        hint="500kB or less"
        persistent-hint
        v-model="image"
        show-size
        prepend-icon="mdi-image"
        label="Image"
      ></v-file-input>
      <v-file-input
        hint="50MB or less"
        persistent-hint
        v-model="audio"
        show-size
        prepend-icon="mdi-volume-high"
        label="Audio*"
      ></v-file-input>
    </v-container>
    <v-btn
      :loading="loading"
      :disabled="loading"
      @click="post_feature"
      class="my-5"
      color="primary"
      >Submit</v-btn
    >
  </v-container>
</template>

<script>
import SecondaryMap from "@/components/SecondaryMap.vue";
import Cookies from "vue-cookies";
import axios from "axios";
export default {
  methods: {
    post_feature: function () {
      this.loading = true;
      if (
        this.lat &&
        this.long &&
        this.name &&
        this.location &&
        this.description &&
        this.season &&
        this.audio &&
        this.time &&
        Cookies.get("token") &&
        (this.is_interior !== 0 ||
          this.is_mechanical !== 0 ||
          this.is_natural !== 0 ||
          this.is_societal !== 0)
      ) {
        let form = new FormData();
        form.append("lat", this.lat);
        form.append("long", this.long);
        form.append("location", this.location);
        form.append("name", this.name);
        form.append("description", this.description);
        form.append("is_interior", this.is_interior);
        form.append("is_mechanical", this.is_mechanical);
        form.append("is_natural", this.is_natural);
        form.append("is_societal", this.is_societal);
        form.append("season", this.season.toLowerCase());
        form.append("time", this.time.toLowerCase());
        form.append("token", Cookies.get("token"));
        form.append("audio", this.audio);
        if (this.image != undefined) {
          form.append("image", this.image);
        }
        axios
          .request({
            url: `${process.env.VUE_APP_BASE_DOMAIN}/api/feature`,
            method: `POST`,
            data: form,
            headers: { "Content-Type": "multipart/form-data" },
          })
          .then(() => {
            this.loading = false;
            this.$root.$emit(
              "snackbar",
              true,
              "Upload succesful. Awaiting admin approval",
              "success"
            );
            this.lat = undefined;
            this.long = undefined;
            this.name = undefined;
            this.location = undefined;
            this.description = undefined;
            this.season = undefined;
            this.time = undefined;
            this.is_interior = 0;
            this.is_mechanical = 0;
            this.is_natural = 0;
            this.is_societal = 0;
            this.audio = null;
            this.image = null;
          })
          .catch(() => {
            this.loading = false;
            this.$root.$emit("snackbar", true, "Upload failed", "error");
          });
      } else if (
        this.lat &&
        this.long &&
        this.name &&
        this.location &&
        this.description &&
        this.season &&
        this.audio &&
        this.time &&
        Cookies.get("token") &&
        this.is_interior == 0 &&
        this.is_mechanical == 0 &&
        this.is_natural == 0 &&
        this.is_societal == 0
      ) {
        this.loading = false;
        this.$root.$emit(
          "snackbar",
          true,
          "Must select at least one category",
          "error"
        );
      } else {
        this.loading = false;
        ("Must select at least one category");
        this.$root.$emit("snackbar", true, "Missing information", "error");
      }
    },
    get_latlng: function (lat, long, location) {
      this.lat = lat;
      this.long = long;
      this.location = location;
    },
  },
  data() {
    return {
      audio: null,
      image: null,
      lat: undefined,
      long: undefined,
      location: undefined,
      description: undefined,
      name: undefined,
      is_interior: 0,
      is_mechanical: 0,
      is_natural: 0,
      is_societal: 0,
      season: undefined,
      time: undefined,
      seasons: ["Summer", "Fall", "Winter", "Spring"],
      times: ["Day", "Night"],
      loading: false,
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
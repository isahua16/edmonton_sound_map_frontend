<template>
  <v-main>
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="10">
          <h2 class="my-16">About</h2>
          <p>
            Edmonton Sound Map is a community-driven initiative that seeks to
            preserve and celebrate the rich tapestry of sounds that make up the
            city's soundscape. Envisioned as a living auditory archive, this
            project encourages residents and visitors alike to actively
            participate in documenting the diverse array of sounds found
            throughout Edmonton.
          </p>
          <p>
            From the bustling downtown streets to the tranquil sounds of nature
            in the River Valley, every aspect of the city's acoustic environment
            is captured and cataloged through this collaborative effort.
            Edmonton Sound Map not only serves as a repository of audio
            recordings but also aims to raise awareness about the significance
            of soundscapes in shaping our urban experiences and emotional
            connections to a place.
          </p>
          <p>
            Through an accessible and user-friendly online platform, individuals
            can contribute their audio recordings, anecdotes, and reflections,
            adding layers of personal stories to the collective sonic mosaic of
            Edmonton. The map serves as a valuable resource for researchers,
            historians, artists, and curious individuals eager to explore the
            city through an auditory lens.
          </p>
          <p>
            Edmonton Sound Map is more than just an archive; it is a testament
            to the power of sound to connect people, places, and memories,
            preserving the essence of the city's sonic heritage for years to
            come.
          </p>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="auto">
          <v-btn
            class="mt-4 mb-16"
            target="_blank"
            href="https://discord.gg/eKTXf5JUzR"
            color="primary"
            large
          >
            <v-icon class="mr-3">$discord</v-icon>
            Join our Community
          </v-btn>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="10" sm="4" md="3" lg="2" xl="1">
          <v-avatar size="150">
            <img
              src="/isael.jpg"
              alt="Image of co-founder and developer Isael Huard"
            />
          </v-avatar>
        </v-col>
        <v-col cols="10" sm="6" md="7" lg="8" xl="9">
          <h3>Isael Huard</h3>
          <p>Co-Founder, Developer</p>
          <v-btn href="mailto:isaelhuard@gmail.com" color="primary">
            <v-icon class="mr-1">mdi-email</v-icon>
            Email</v-btn
          >
          <v-btn
            class="ml-2"
            target="_blank"
            href="https://www.linkedin.com/in/isaelhuard/"
            color="primary"
            ><v-icon class="mr-1">mdi-linkedin</v-icon> LinkedIn</v-btn
          >
        </v-col>
      </v-row>
      <v-row class="mt-8" align="center" justify="center">
        <v-col cols="10" sm="4" md="3" lg="2" xl="1">
          <v-avatar size="150">
            <img
              src="/icon.png"
              alt="Image of Edmonton Sound Map icon that represents the North Saskatchewan River"
            />
          </v-avatar>
        </v-col>
        <v-col cols="10" sm="6" md="7" lg="8" xl="9">
          <h3>Chris Szott</h3>
          <p>Co-Founder</p>
          <v-btn href="mailto:chrisszott@gmail.com" color="primary">
            <v-icon class="mr-1">mdi-email</v-icon>Email</v-btn
          >
          <v-btn
            class="ml-2"
            target="_blank"
            href="https://www.linkedin.com/in/chris-szott/"
            color="primary"
          >
            <v-icon class="mr-1">mdi-linkedin</v-icon>LinkedIn</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
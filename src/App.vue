<template>
  <v-app>
    <v-app-bar
      app
      class="color"
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <div class="d-flex align-center">
        <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon>
        <v-toolbar-title
          style="color:white;font-size: 24px;
        font-weight: 800;"
          >Playtonia</v-toolbar-title
        >
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <app-home></app-home>
    </v-main>
  </v-app>
</template>

<script>
import Vue from "vue";
import Home from "./views/Home";

export default Vue.extend({
  name: "App",
  components: {
    "app-home": Home
  },
  data: () => ({
    //
  })
});
</script>

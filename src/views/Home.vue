<template>
  <v-container>
    <v-row>
      <v-col v-for="item in toDoList" :key="item.id" cols="12" md="4">
        <v-card class="mx-auto" min-height="350px">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-title>Todo List</v-card-title>
          </v-img>
          <v-card-subtitle class="pb-0">ID: {{ item.id }}</v-card-subtitle>
          <v-card-text class="text--primary">
            <div>USER ID: {{ item.userId }}</div>

            <div>Title: {{ item.title }}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data: function() {
    return {};
  },
  created: function() {
    this.initializeApp();
  },
  computed: {
    toDoList() {
      return this.$store.getters.toDoList;
    }
  },
  methods: {
    initializeApp() {
      axios
        .get("https://jsonplaceholder.typicode.com/todos/")
        .then(response => {
          this.$store.commit("updateToDoList", response.data);
        });
    }
  }
};
</script>

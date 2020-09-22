import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    toDoList: []
  },
  mutations: {
    updateToDoList(state, data) {
      state.toDoList = data;
    }
  },
  getters: {
    toDoList: state => state.toDoList
  }
});

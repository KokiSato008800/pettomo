import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userMessages: []
  },
  mutations: {
    addMessage(state, message) {
      state.userMessages.push(message);
    }
  },
  actions: {
    addMessage({ commit }, message) {
      commit('addMessage', message);
    }
  }
});
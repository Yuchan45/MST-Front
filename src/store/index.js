import { createStore } from 'vuex';
import VuexPersistence from 'vuex-persist';

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
  plugins: [
    new VuexPersistence({
      storage: window.localStorage,
    }).plugin,
  ],
});

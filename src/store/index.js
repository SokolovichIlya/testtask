import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notification: {
      title: '',
      body: '',
      active: false,
    }
  },
  getters: {
    notification(state) {
      return state.notification
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

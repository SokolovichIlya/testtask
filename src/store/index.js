import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    order: [
      {
        id: 1,
        name: 'Товар 1',
        description: 'Описание товара 1',
        sale: 250,
        count: 1,
        isCIncludedInOrder: true 
      },
      {
        id: 2,
        name: 'Товар 2',
        description: 'Описание товара 2',
        sale: 450,
        count: 1,
        isCIncludedInOrder: true 
      },
      {
        id: 3,
        name: 'Товар 3',
        description: 'Описание товара 3',
        sale: 5150,
        count: 1,
        isCIncludedInOrder: true 
      }
    ],
    customer: {
      address: null,
      fio: null,
      phone: null,
      email: null,
    },
  },
  getters: {
    order(state) {
      return state.order
    },
    customer(state) {
      return state.customer
    },
  },
  mutations: {
    SET_ORDER(state, data) {
      state.order = data;
    },
    SET_CUSTOMER(state, data) {
      state.customer = data;
    }
  },
  actions: {
    setCustomer({ commit }, data) {
      return new Promise((resolve) => {
        commit('SET_CUSTOMER', data)
        resolve();
      })
    },
    setOrder({ commit }, data) {
      return new Promise((resolve) => {
        commit('SET_ORDER', data)
        resolve();
      })
    },
  },
  modules: {
  }
})

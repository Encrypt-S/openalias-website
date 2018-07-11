import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    address: '',
    alias: '',
  },
  mutations: {
    saveAlias (state, payload) {
      state.address = payload.address
      state.alias = payload.alias
    }
  }
})

export default store
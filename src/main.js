import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import App from './App.vue'

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    address: 'hello',
  },
  mutations: {
    updateAddress (state, newAddress) {
      state.address = newAddress
    }
  }
})

new Vue({
  store: store,
  el: '#app',
  render: h => h(App)
})


import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'
import Toasted from 'vue-toasted';


import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(VueClipboard)
Vue.use(Toasted)

Vue.config.productionTip = false

new Vue({

  store: store,
  el: '#app',
  router,
  render: h => h(App)
})


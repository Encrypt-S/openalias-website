import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import VerifyNewAddress from './views/VerifyNewAddress.vue'
import VerifyPrevAddress from './views/VerifyPrevAddress.vue'
import CreateAlias from './views/CreateAlias.vue'
import FAQ from './views/FAQ.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/verify-new-address/',
      name: 'VerifyNewAddress',
      component: VerifyNewAddress,
    },
    {
      path: '/verify-prev-address/',
      name: 'verifyPrevAddress',
      component: VerifyPrevAddress,
    },
    {
      path: '/create-alias/',
      name: 'CreateAlias',
      component: CreateAlias,
    },
    {
      path: '/faq',
      name: 'faq',
      component: FAQ,
    }
  ]
})

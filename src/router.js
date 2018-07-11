import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SignNewAddress from './views/signNewAddress.vue'
import VerifyNewAddress from './views/verifyNewAddress.vue'
import SignPrevAddress from './views/signPrevAddress.vue'
import VerifyPrevAddress from './views/verifyPrevAddress.vue'
import createAlias from './views/createAlias.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/sign-new-address/',
      name: 'signNewAddress',
      component: SignNewAddress,
    },
    {
      path: '/verify-new-address/',
      name: 'verifyNewAddress',
      component: VerifyNewAddress,
    },
    {
      path: '/sign-prev-address/',
      name: 'signPrevAddress',
      component: SignPrevAddress,
    },
    {
      path: '/verify-prev-address/',
      name: 'verifyPrevAddress',
      component: VerifyPrevAddress,
    },
    {
      path: '/create-alias/',
      name: 'createAlias',
      component: createAlias,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    }
  ]
})

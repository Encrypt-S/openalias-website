import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SignNewAddress from './views/signNewAddress.vue'
import verifyNewAddress from './views/verifyNewAddress.vue'
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
      component: verifyNewAddress,
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

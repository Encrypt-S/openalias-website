import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import StepOne from './views/Step-One.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/stepOne/:incomingData',
      name: 'stepOne',
      component: StepOne
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import StepOne from './views/StepOne.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'step-1',
      component: StepOne
    },
    {
      path: '/step-2',
      name: 'step-2',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/StepTwo.vue')
    },
    {
      path: '/step-3',
      name: 'step-3',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/StepThree.vue')
    }
  ]
})

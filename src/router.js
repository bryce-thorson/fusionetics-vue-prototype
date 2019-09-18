import Vue from 'vue'
import Router from 'vue-router'
import Onboarding from './views/Onboarding.vue';
import OnboardingTwo from './views/OnboardingTwo.vue';
import OnboardingThree from './views/OnboardingThree.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Onboarding',
      component: Onboarding
    },
    {
      path: '/Onboarding-2',
      name: 'OnboardingTwo',
      component: OnboardingTwo
    },
    {
      path: '/Onboarding-3',
      name: 'OnboardingThree',
      component: OnboardingThree
    },
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import OnBoarding from './components/OnBoarding.vue';
import Questionnaire from './views/Questionnaire-1.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'OnBoarding',
      component: OnBoarding
    },
    {
      path: '/Questionnaire-1',
      name: 'Questionnaire-1',
      component: Questionnaire
    }
  ]
})

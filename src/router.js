import Vue from 'vue'
import Router from 'vue-router'
import OnBoarding from './components/OnBoarding.vue';
import Questionnaire from './views/Questionnaire_One.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'OnBoarding',
      component: OnBoarding
    },
    {
      path: '/Questionnaire_One',
      name: 'Questionnaire_One',
      component: Questionnaire
    }
  ]
})

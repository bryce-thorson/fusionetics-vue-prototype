import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './router';
import {NavBar, Tabbar, TabbarItem, Card, Grid, GridItem} from 'vant';
import BootstrapVue from 'bootstrap-vue'

Vue.use(NavBar)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Card)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(VueRouter)
Vue.use(BootstrapVue)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

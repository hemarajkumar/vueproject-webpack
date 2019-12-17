import Vue from 'vue';
import Router from 'vue-router';
import homePage from '../components/homepage.vue';
import plpPage from '../components/plp.vue';
Vue.use(Router)

export default new Router({
    routes: [
      {
        path: '/',
        name: 'HomePage',
       component: homePage
      },
      {
        path: '/plp/:category',
        name: 'plp',
        component: plpPage
      }
    ]
  })
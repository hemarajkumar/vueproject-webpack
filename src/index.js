import './sass/main.scss';
require ('./modules/common/main');

import Vue from 'vue'
import router from './modules/routing';
import App from './modules/App'
import { store } from "./modules/store/store";

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

/* eslint-disable no-new */
/*
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
*/
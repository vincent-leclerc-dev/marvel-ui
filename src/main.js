import '@babel/polyfill';
import 'mutationobserver-shim';
import Vue from 'vue';
import './plugins/bootstrap-vue';
import App from './App.vue';
import Vue2TouchEvents from 'vue2-touch-events';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
require('./assets/css/global.scss');

Vue.use(Vue2TouchEvents);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

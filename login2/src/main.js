import Vue from 'vue';
import App from './App.vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/styles.scss';

import * as VeeValidate from 'vee-validate';

Vue.config.productionTip = false;
Vue.use(VeeValidate);

new Vue({
  render: h => h(App)
}).$mount('#app');

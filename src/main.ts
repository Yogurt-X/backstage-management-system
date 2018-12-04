import Vue from 'vue';
import store from '@/views/store/store';
import App from './App.vue';
import router from './router';
import * as ElementUI from 'element-ui';

Vue.config.productionTip = false;
Vue.use(ElementUI);

// vuex通过store选项，提供一种机制将状态从跟组件注入到每一个子组件中
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import remsp from 'public/js/remsp'
import 'fastclick/lib/fastclick'
import axios from 'axios'
import VueAxios from 'vue-axios'
// css样式
import 'normalize.css'
import './plugins/element.js'

remsp()
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

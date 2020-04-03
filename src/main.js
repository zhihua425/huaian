// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'
import "echarts/map/js/world"
import 'echarts-gl';
import store from './store/store'
import axios from 'axios'

Vue.prototype.$axios = axios //设置全局变量,在其他组件中就可以用this.$axios调用axios
axios.defaults.headers['Content-Type'] = "application/json"
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

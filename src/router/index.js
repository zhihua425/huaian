import Vue from 'vue'
import Router from 'vue-router'
import Wrap from '@/components/wrap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Wrap
    }
  ]
})

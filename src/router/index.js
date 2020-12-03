import Vue from 'vue'
import Router from 'vue-router'
import Button from '../components/Button.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Button',
      component:Button
    }
  ]
})

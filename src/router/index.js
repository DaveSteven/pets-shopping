import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

export default new Router({
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

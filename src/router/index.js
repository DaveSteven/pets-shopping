import Vue from 'vue'
import Router from 'vue-router'

const Home = (resolve) => {
  import('@/view/home/home').then((module) => {
    resolve(module)
  })
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})

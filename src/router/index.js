import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import store from '../store'

Vue.use(Router)

const router = new Router({
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

/**
 * 导航守卫
 * 拦截进入/user相关的路由，检测是否登录
 * 如果未登录，返回首页，提示登录
 */
router.beforeEach((to, from, next) => {
  if (to.path.indexOf('/user') > -1) {
    store.dispatch('getUserInformation').then(() => {
      next()
    }).catch(() => {
      next('/')
      store.commit('SET_LOGIN_VISIBLE', true)
    })
  } else {
    next()
  }
})

export default router

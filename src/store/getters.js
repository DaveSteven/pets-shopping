import { getMenuByRouter, getUserMenuByRouter } from 'common/js/utils'
import routes from '@/router/routes'
import userRoutes from '@/router/userRoutes'

function getTotal (list) {
  let total = 0
  list.forEach(goods => {
    total += goods.price * goods.count
  })
  return total.toFixed(2)
}

export const menuList = (state, getters, rootState) => getMenuByRouter(routes)

export const userMenuList = (state, getters, rootState) => getUserMenuByRouter(userRoutes)

export const cart = (state) => {
  return {
    list: state.cartList,
    total: getTotal(state.cartList)
  }
}

export const loginVisible = (state) => state.loginVisible

export const loginAction = (state) => state.loginAction

export const logined = (state) => state.logined

export const user = (state) => state.user

export const userMenuActiveName = (state) => state.userMenuActiveName

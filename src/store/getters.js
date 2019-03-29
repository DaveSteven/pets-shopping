import { getMenuByRouter } from 'common/js/utils'
import routes from '@/router/routes'

function getTotal (list) {
  let total = 0
  list.forEach(good => {
    total += good.price * good.count
  })
  return total.toFixed(2)
}

export const menuList = (state, getters, rootState) => getMenuByRouter(routes)

export const cart = (state) => {
  return {
    list: state.cartList,
    total: getTotal(state.cartList)
  }
}

export const loginVisible = (state) => state.loginVisible

export const loginAction = (state) => state.loginAction

export const user = (state) => state.user

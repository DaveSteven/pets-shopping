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

export const cartList = (state) => state.cartList

export const total = (state) => getTotal(state.cartList)

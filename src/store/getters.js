import { getMenuByRouter } from 'common/js/utils'
import routes from '@/router/routes'

export const menuList = (state, getters, rootState) => getMenuByRouter(routes)

export const cartList = (state) => state.cartList

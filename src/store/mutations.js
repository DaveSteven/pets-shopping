import * as types from './mutation-types'

const mutations = {
  [types.SET_CART_LIST] (state, list) {
    state.cartList = list
  },
  [types.SET_LOGIN_VISIBLE] (state, flag) {
    state.loginVisible = flag
  }
}

export default mutations

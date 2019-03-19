import * as types from './mutation-types'

const mutations = {
  [types.SET_CART_LIST] (state, list) {
    state.cartList = list
  }
}

export default mutations

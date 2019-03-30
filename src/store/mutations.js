import * as types from './mutation-types'

const mutations = {
  [types.SET_CART_LIST] (state, list) {
    state.cartList = list
  },
  [types.SET_LOGIN_VISIBLE] (state, flag) {
    state.loginVisible = flag
  },
  [types.SET_LOGIN_ACTION] (state, flag) {
    state.loginAction = flag
  },
  [types.SET_USER_AVATAR] (state, avatar) {
    state.user.avatar = avatar
  },
  [types.SET_USER_NAME] (state, name) {
    state.user.name = name
  },
  [types.SET_USER_ID] (state, id) {
    state.user.id = id
  },
  [types.SET_LOGIN_STATE] (state, flag) {
    state.logined = flag
  }
}

export default mutations

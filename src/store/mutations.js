import * as types from './mutation-types'
import { saveCartList } from 'common/js/catch'

function findIndex (list, good) {
  return list.findIndex(item => {
    return item.id === good.id
  })
}

const mutations = {
  [types.SET_CART_LIST] (state, good) {
    const cartList = state.cartList
    let index = findIndex(cartList, good)
    if (index >= 0) {
      cartList[index].count++
    } else {
      cartList.push({ ...good, count: 1 })
    }
    saveCartList(cartList)
  },
  [types.ADD_GOOD_COUNT] (state, good) {
    const cartList = state.cartList
    let index = findIndex(cartList, good)
    if (index >= 0) {
      cartList[index].count++
    }
    saveCartList(cartList)
  },
  [types.DECREASE_GOOD_COUNT] (state, good) {
    const cartList = state.cartList
    let index = findIndex(cartList, good)
    if (index >= 0) {
      const count = cartList[index].count
      if (count > 0) {
        cartList[index].count--
      }
    }
    saveCartList(cartList)
  }
}

export default mutations

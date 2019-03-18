import * as types from './mutation-types'
import { saveCartList } from 'common/js/catch'

function findIndex (list, goods) {
  return list.findIndex(item => {
    return item.id === goods.id
  })
}

const mutations = {
  [types.SET_CART_LIST] (state, goods) {
    const cartList = state.cartList
    let index = findIndex(cartList, goods)
    if (index >= 0) {
      cartList[index].count++
    } else {
      cartList.push({ ...goods, count: 1 })
    }
    saveCartList(cartList)
  }
}

export default mutations

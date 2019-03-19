import * as types from './mutation-types'
import { saveCartList } from 'common/js/catch'
import deepClone from 'lodash.clonedeep'

function findIndex (list, good) {
  return list.findIndex(item => {
    return item.id === good.id
  })
}

export const addCart = ({ commit, state }, { good }) => {
  const cartList = deepClone(state.cartList)
  let index = findIndex(cartList, good)
  if (index >= 0) {
    cartList[index].count++
  } else {
    cartList.push({ ...good, count: 1 })
  }
  commit(types.SET_CART_LIST, cartList)
  saveCartList(cartList)
}

export const decreaseCart = ({ commit, state }, { good }) => {
  const cartList = deepClone(state.cartList)
  let index = findIndex(cartList, good)
  if (index >= 0) {
    const count = cartList[index].count
    if (count >= 0) {
      cartList[index].count--
    }
  }
  commit(types.SET_CART_LIST, cartList)
  saveCartList(cartList)
}

export const setGoodCount = ({ commit, state }, { good, count }) => {
  const cartList = deepClone(state.cartList)
  let index = findIndex(cartList, good)
  if (index >= 0) {
    cartList[index].count = count
  }
  commit(types.SET_CART_LIST, cartList)
  saveCartList(cartList)
}

export const removeGood = ({ commit, state }, { good }) => {
  const cartList = deepClone(state.cartList)
  let index = findIndex(cartList, good)
  if (index >= 0) {
    cartList.splice(index, 1)
  }
  commit(types.SET_CART_LIST, cartList)
  saveCartList(cartList)
}

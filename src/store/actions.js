import * as types from './mutation-types'
import { saveCartList } from 'common/js/catch'
import { getUserInfo, logout } from '@/api/user'
import deepClone from 'lodash.clonedeep'

/**
 * 寻找目标下标
 * @param list {Array}
 * @param goods {Object}
 * @returns {index|number|*}
 */
function findIndex (list, goods) {
  return list.findIndex(item => {
    return item.id === goods.id
  })
}

/**
 * 添加商品到购物车
 * @param commit
 * @param state
 * @param goods
 */
export const addCart = ({ commit, state }, { goods }) => {
  const cartList = deepClone(state.cartList)
  let index = findIndex(cartList, goods)
  if (index >= 0) {
    cartList[index].count++
  } else {
    cartList.push({ ...goods, count: 1 })
  }
  commit(types.SET_CART_LIST, cartList)
  saveCartList(cartList)
}

/**
 * 减少数量
 * @param commit
 * @param state
 * @param goods
 */
export const decreaseCart = ({ commit, state }, { goods }) => {
  const cartList = deepClone(state.cartList)
  let index = findIndex(cartList, goods)
  if (index >= 0) {
    const count = cartList[index].count
    if (count >= 0) {
      cartList[index].count--
    }
  }
  commit(types.SET_CART_LIST, cartList)
  saveCartList(cartList)
}

/**
 * 添加数量
 * @param commit
 * @param state
 * @param goods
 * @param count
 */
export const setGoodsCount = ({ commit, state }, { goods, count }) => {
  const cartList = deepClone(state.cartList)
  let index = findIndex(cartList, goods)
  if (index >= 0) {
    cartList[index].count = count
  }
  commit(types.SET_CART_LIST, cartList)
  saveCartList(cartList)
}

/**
 * 从购物车中删除商品
 * @param commit
 * @param state
 * @param goods
 */
export const removeGoods = ({ commit, state }, { goods }) => {
  const cartList = deepClone(state.cartList)
  let index = findIndex(cartList, goods)
  if (index >= 0) {
    cartList.splice(index, 1)
  }
  commit(types.SET_CART_LIST, cartList)
  saveCartList(cartList)
}

/**
 * 获取用户信息
 * @param commit
 * @param state
 * @param user
 * @returns {Promise<userInfo>}
 */
export const getUserInformation = ({ commit, state }) => {
  return new Promise((resolve, reject) => {
    try {
      getUserInfo().then(res => {
        const data = res.data
        commit(types.SET_USER_ID, data.id)
        commit(types.SET_USER_AVATAR, data.head)
        commit(types.SET_USER_NAME, data.name)
        commit(types.SET_LOGIN_STATE, true)
        resolve(data)
      }).catch(err => {
        commit(types.SET_LOGIN_STATE, false)
        reject(err)
      })
    } catch (error) {
      commit(types.SET_LOGIN_STATE, false)
      reject(error)
    }
  })
}

/**
 * 用户退出登录
 * @param commit
 * @param state
 */
export const userLogout = ({ commit, state }) => {
  return new Promise((resolve, reject) => {
    try {
      logout().then(() => {
        commit(types.SET_USER_ID, '')
        commit(types.SET_USER_AVATAR, '')
        commit(types.SET_USER_NAME, '')
        commit(types.SET_LOGIN_STATE, false)
        resolve('')
      }).catch(err => {
        reject(err)
      })
    } catch (error) {
      reject(err)
    }
  })
}

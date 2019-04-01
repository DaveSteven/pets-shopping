import storage from 'good-storage'

/**
 * 存取购物车列表
 * @type {string}
 */
const CART_KEY = '__cartList__'
export const saveCartList = (list) => {
  storage.set(CART_KEY, list)
}
export const getCartList = () => {
  return storage.get(CART_KEY, [])
}

/**
 * 存取选中地址
 * @type {string}
 */
const SELECTED_ADDRESS_KEY = '__selectedAddress__'
export const saveAddress = (obj) => {
  storage.session.set(SELECTED_ADDRESS_KEY, obj)
}

export const getAddress = () => {
  return storage.session.get(SELECTED_ADDRESS_KEY, {})
}

/**
 * 存取宠物详情
 * @param id
 * @returns {string}
 * @constructor
 */
const PET_KEY = (id) => `__pet${id}__`
export const savePet = (obj) => {
  storage.session.set(PET_KEY(obj.id), obj)
}
export const getPet = (id) => {
  return storage.session.get(PET_KEY(id))
}

/**
 * 存取用品详情
 * @param id
 * @returns {string}
 * @constructor
 */
const PET_PRODUCT_KEY = (id) => `__petProduct${id}__`
export const savePetProduct = (obj) => {
  storage.session.set(PET_PRODUCT_KEY(obj.id), obj)
}
export const getPetProduct = (id) => {
  return storage.session.get(PET_PRODUCT_KEY(id))
}

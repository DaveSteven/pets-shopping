import storage from 'good-storage'

const CART_KEY = '__cartList__'
export const saveCartList = (list) => {
  storage.set(CART_KEY, list)
}

export const getCartList = () => {
  return storage.get(CART_KEY, [])
}

const SELECTED_ADDRESS_KEY = '__selectedAddress__'
export const saveAddress = (obj) => {
  storage.session.set(SELECTED_ADDRESS_KEY, obj)
}

export const getAddress = () => {
  return storage.session.get(SELECTED_ADDRESS_KEY, {})
}

import storage from 'good-storage'

const CART_KEY = '__cartList__'
export const saveCartList = (list) => {
  storage.set(CART_KEY, list)
}

export const getCartList = () => {
  return storage.get(CART_KEY, [])
}

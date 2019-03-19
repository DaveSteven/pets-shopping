import { getCartList } from 'common/js/catch'
import addressData from '@/mock/user/address'

const state = {
  cartList: getCartList(),
  user: {
    address: addressData.data
  },
  loginVisible: false
}

export default state

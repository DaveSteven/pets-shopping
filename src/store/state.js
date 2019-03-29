import { getCartList } from 'common/js/catch'
import addressData from '@/mock/user/address'

const state = {
  cartList: getCartList(),
  user: {
    address: addressData.data,
    avatar: '',
    name: ''
  },
  loginVisible: false,
  loginAction: 'login'
}

export default state

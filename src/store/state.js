import { getCartList, getLoginState } from 'common/js/catch'
import addressData from '@/mock/user/address'

const state = {
  cartList: getCartList(),
  user: {
    id: '',
    address: addressData.data,
    avatar: '',
    name: ''
  },
  loginVisible: false,
  loginAction: 'login',
  logined: getLoginState(),
  userMenuActiveName: ''
}

export default state

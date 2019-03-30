import axios from '@/libs/api.request'

/**
 * 用户登录
 * @param name
 * @param password
 * @returns {*}
 */
export function login ({ name, password }) {
  const data = {
    name,
    password
  }
  return axios.request({
    url: '/doLogin',
    method: 'post',
    data
  })
}

/**
 * 用户注册
 * @param name
 * @param password
 * @param head
 * @param phoneNumber
 * @param email
 * @param address
 * @returns {*}
 */
export function register ({ name, password, head, phoneNumber, email, address }) {
  const data = {
    name,
    password,
    head,
    phoneNumber,
    email,
    address
  }
  return axios.request({
    url: '/doRegister',
    method: 'post',
    data
  })
}

/**
 * 获取用户信息
 * @returns {*}
 */
export function getUserInfo () {
  return axios.request({
    url: '/getUserInfo',
    method: 'get'
  })
}

/**
 * 获取用户订单
 * @param userId {Number}
 * @returns {ClientRequest | ClientHttp2Stream | * | never | AxiosPromise<any>}
 */
export function getOrderList ({ userId }) {
  return axios.request({
    url: '/getShoppingRecords',
    method: 'get',
    params: {
      userId: userId
    }
  })
}

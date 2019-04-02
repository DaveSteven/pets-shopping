import axios from '@/libs/api.request'

/**
 * 下单
 * @param lists
 * @returns {ClientRequest | ClientHttp2Stream | * | never | AxiosPromise<any>}
 */
export function addOrder ({ userId, lists }) {
  return axios.request({
    url: '/addShoppingRecordList',
    method: 'post',
    data: {
      userId,
      lists
    }
  })
}

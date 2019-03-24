import axios from '@/libs/api.request'

/**
 * 获取所有宠物用品
 * @returns {*}
 */
export function getSupplies () {
  return axios.request({
    url: '/getAllProducts',
    method: 'get'
  })
}

export function getPets () {
  return axios.request({
    url: '/getAllPets',
    method: 'get'
  })
}

export function getSuppliesByKeyWord (keyWord) {
  const params = {
    'keyWord': keyWord
  }
  return axios.request({
    url: '/searchSupply',
    method: 'get',
    params: params
  })
}

export function getPetsByKeyWord (keyWord) {
  const params = {
    'keyWord': keyWord
  }
  return axios.request({
    url: '/searchPet',
    method: 'get',
    params: params
  })
}

import axios from '@/libs/api.request'

/**
 * 获取所有宠物用品
 * @returns {*}
 */
export function getSupplies () {
  return axios.request({
    url: '/getAllProducts',
    methods: 'get'
  })
}

export function getPets () {
  return axios.request({
    url: '/getAllPets',
    methods: 'get'
  })
}

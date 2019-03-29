import axios from '@/libs/api.request'

export function getArticles () {
  return axios.request({
    url: '/getAllPosts',
    methods: 'get'
  })
}

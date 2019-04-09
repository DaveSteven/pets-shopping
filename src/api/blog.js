import axios from '@/libs/api.request'

/**
 * 获取博客文章
 * @returns {ClientRequest | ClientHttp2Stream | * | never | AxiosPromise<any>}
 */
export function getArticles () {
  return axios.request({
    url: '/getAllPosts',
    method: 'get'
  })
}

/**
 * 获取用户文章
 * @returns {ClientRequest | ClientHttp2Stream | * | never | AxiosPromise<any>}
 */
export function getArticlesByUser () {
  return axios.request({
    url: '/getPostByUser',
    method: 'get'
  })
}

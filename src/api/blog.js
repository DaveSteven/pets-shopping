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

/**
 * 获取上传token
 * @returns {ClientRequest | ClientHttp2Stream | * | never | AxiosPromise<any>}
 */
export function getUpToken () {
  return axios.request({
    url: '/getUpToken',
    method: 'get'
  })
}

/**
 * 添加文章
 * @param title {String}
 * @param img 七牛云地址 {String}
 * @param content Html
 * @returns {ClientRequest | ClientHttp2Stream | * | never | AxiosPromise<any>}
 */
export function addArticle ({ title, img, content }) {
  const data = {
    title,
    img,
    content
  }
  return axios.request({
    url: '/addPost',
    method: 'post',
    data
  })
}

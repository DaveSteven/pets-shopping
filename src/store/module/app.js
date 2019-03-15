import { getMenuByRouter } from 'common/js/utils'
import routes from '@/router/routes'

export default {
  state: {},
  getters: {
    menuList: (state, getters, rootState) => getMenuByRouter(routes)
  },
  mutations: {},
  actions: {}
}

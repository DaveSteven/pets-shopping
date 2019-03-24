import { getMenuByRouter, getUserMenuByRouter } from 'common/js/utils'
import routes from '@/router/routes'
import userRoutes from '@/router/userRoutes'

export const setlogined = (state, logined) => {
  state.logined = logined
}

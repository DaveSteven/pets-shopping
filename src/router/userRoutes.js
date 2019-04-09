const ROUTE_PATH_PREFIX = '/user'

export default [
  {
    path: `${ROUTE_PATH_PREFIX}/order`,
    name: 'userOrder',
    meta: {
      title: '用户订单',
      group: {
        type: 'order',
        title: '订单中心'
      },
      hideInMenu: true
    },
    component: () => import('@/view/user-order/user-order')
  },
  {
    path: `${ROUTE_PATH_PREFIX}/blog`,
    name: 'userBlog',
    meta: {
      title: '用户博客',
      group: {
        type: 'blog',
        title: '博客'
      },
      hideInMenu: true
    },
    component: () => import('@/view/user-blog/user-blog')
  },
  {
    path: `${ROUTE_PATH_PREFIX}/info`,
    name: 'userInfo',
    meta: {
      title: '用户信息',
      group: {
        type: 'setting',
        title: '设置'
      },
      hideInMenu: true
    }
  },
  {
    path: `${ROUTE_PATH_PREFIX}/avatar`,
    name: 'userAvatar',
    meta: {
      title: '用户头像',
      group: {
        type: 'setting',
        title: '设置'
      },
      hideInMenu: true
    }
  }
]

export default [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '主页'
    },
    component: () => import('@/view/home/home')
  },
  {
    path: '/pets',
    name: 'Pets',
    meta: {
      title: '萌宠'
    },
    children: [
      {
        path: '/cats',
        name: 'Cats',
        meta: {
          title: '猫咪'
        }
      },
      {
        path: '/dogs',
        name: 'Dogs',
        meta: {
          title: '狗狗'
        }
      }
    ]
  },
  {
    path: '/supplies',
    name: 'Supplies',
    meta: {
      title: '用品'
    },
    children: [
      {
        path: '/life',
        name: 'Life',
        meta: {
          title: '日用品'
        }
      },
      {
        path: '/toy',
        name: 'Toy',
        meta: {
          title: '玩具'
        }
      },
      {
        path: '/food',
        name: 'Food',
        meta: {
          title: '食品'
        }
      }
    ]
  },
  {
    path: '/cart',
    name: 'ShopCart',
    meta: {
      title: '购物车',
      hideInMenu: true
    },
    component: () => import('@/view/shop-cart/shop-cart')
  },
  {
    path: '/cart/checkout',
    name: 'Checkout',
    meta: {
      title: '购物车结算',
      hideInMenu: true
    },
    component: () => import('@/view/checkout/checkout')
  },
  {
    path: '/blog',
    name: 'Blog',
    meta: {
      title: '博客'
    },
    component: () => import('@/view/blog/blog')
  }
]

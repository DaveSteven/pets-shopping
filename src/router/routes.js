const Home = (resolve) => {
  import('@/view/home/home').then((module) => {
    resolve(module)
  })
}

export default [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '主页'
    },
    component: Home
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
  }
]

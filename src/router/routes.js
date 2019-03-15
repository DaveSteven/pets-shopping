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
  }
]

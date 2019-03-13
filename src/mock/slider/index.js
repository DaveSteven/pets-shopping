import Mock from 'mockjs'
const Random = Mock.Random
const data = Mock.mock({
  'data|1-5': [{
    'id|+1': 1,
    'picUrl': Random.image('1170x600', Random.color())
  }]
})

export default data

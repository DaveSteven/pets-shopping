import Mock from 'mockjs'
const Random = Mock.Random
const data = Mock.mock({
  'data|8-20': [{
    'id|+1': 1,
    'img': Random.image('308x364', Random.color()),
    'price|1-200.1': 10,
    'name|1-2': '名称',
    'category|1': [
      '食品',
      '玩具',
      '药品'
    ],
    'stock|1-100': 1,
    'description|10-50': '商品描述',
    'good_type': '0'
  }]
})

data.data.forEach(item => {
  item.id = `supplies_${item.id}`
})

export default data

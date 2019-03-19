import Mock from 'mockjs'
const Random = Mock.Random
const data = Mock.mock({
  'data|8-20': [{
    'id|+1': '1',
    'img': Random.image('308x364', Random.color()),
    'price|2000-10000': 2888,
    'name|1-2': '名称',
    'breed|1': [
      '金毛巡回犬',
      '泰迪',
      '拉布拉多',
      '比熊',
      '阿拉斯加',
      '西伯利亚犬',
      '大白熊'
    ],
    'color|1': [
      '白色',
      '黑色',
      '黄色',
      '棕色'
    ],
    'birthday': '@date()',
    'nature|1': [
      '忠厚',
      '老实',
      '调皮',
      '活泼',
      '内向'
    ],
    'type|1': [
      '狗'
    ],
    'description|10-50': '商品描述',
    'good_type': '0'
  }]
})

data.data.forEach(item => {
  item.id = `pets_${item.id}`
})

export default data

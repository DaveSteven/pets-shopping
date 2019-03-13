import Mock from 'mockjs'
const Random = Mock.Random
const data = Mock.mock({
  'data|3-10': [{
    'id|+1': 1,
    'time': '@datetime()',
    'title|5-10': '我是标题',
    'content|100-1000': '文章内容',
    'cover': Random.image('230x160'),
    'user_name': 'admin',
    'comments|10-100': 1
  }]
})

export default data

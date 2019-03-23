import Mock from 'mockjs'
const Random = Mock.Random
const data = Mock.mock({
  'data|3-10': [{
    'id|+1': 1,
    'time': '@now("day")',
    'title|5-10': '我是标题',
    'content|100-1000': '文章内容',
    'cover': Random.image('500x500', Random.color()),
    'user_name|1': [
      'admin',
      '爱笑的眼睛',
      '布拉格广场',
      '夕晨踏雪',
      '朴青一'
    ],
    'comments|10-1000': 1
  }]
})

export default data

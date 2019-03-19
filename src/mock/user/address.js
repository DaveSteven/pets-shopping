import Mock from 'mockjs'
const address = Mock.mock({
  'data': [{
    'id': 1,
    'province': '山东',
    'city': '济南',
    'region': '历下区',
    'address': '财经大学燕山校区',
    'code': '100035'
  },
  {
    'id': 2,
    'province': '北京',
    'city': '北京',
    'region': '海淀区',
    'address': '中关村东路18号',
    'code': '100012'
  },
  {
    'id': 3,
    'province': '山东',
    'city': '济南',
    'region': '天桥区',
    'address': '清河小区',
    'code': '100035'
  }]
})

export default address

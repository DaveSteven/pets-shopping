import Mock from 'mockjs'
const address = Mock.mock({
  'data': [{
    'id': 1,
    'name': '阿文文',
    'province': '山东',
    'city': '青岛市',
    'region': '即墨市',
    'address': '通济街道即墨华山二路御园小区13号楼1单元301',
    'code': '266200',
    'phone': '13455177428'
  },
  {
    'id': 2,
    'name': '书梅',
    'province': '北京',
    'city': '北京',
    'region': '海淀区',
    'address': '中关村东路18号财智国际大厦B座23层',
    'code': '100083',
    'phone': '15169143820'
  },
  {
    'id': 3,
    'name': '林林',
    'province': '山东',
    'city': '济南',
    'region': '历下区',
    'address': '浆水泉西路98号山东财经大学创业园创展苑315',
    'code': '250014',
    'phone': '15169143820'
  }]
})

export default address

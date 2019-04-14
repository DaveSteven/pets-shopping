import env from './env'

const DEV_URL = 'http://localhost:9997'
const PRO_URL = 'http://47.100.12.81:8080'

export default env === 'development' ? DEV_URL : PRO_URL

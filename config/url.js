import env from './env'

const DEV_URL = 'http://localhost:9997'
const PRO_URL = 'https://produce.com'

export default env === 'development' ? DEV_URL : PRO_URL

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import Icon from './base/icon'
import { Row, Col, Card, Button, Select, Option } from 'iview'

import './filters'
import './common/less/iview.less'
import './common/less/index.less'

Vue.use(VueLazyload, {
  loading: require('common/image/loading.gif'),
  error: require('common/image/no-image.png')
})

Vue.component('Select', Select)
Vue.component('Option', Option)
Vue.component('Icon', Icon)
Vue.component('Row', Row)
Vue.component('Card', Card)
Vue.component('Col', Col)
Vue.component('Button', Button)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

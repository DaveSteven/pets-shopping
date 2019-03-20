import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Icon from './base/icon'
import { Row, Col, Card, Button, Select, Option } from 'iview'
import { decimal } from 'common/js/utils'

import './common/less/iview.less'
import './common/less/index.less'

Vue.component('Select', Select)
Vue.component('Option', Option)
Vue.component('Icon', Icon)
Vue.component('Row', Row)
Vue.component('Card', Card)
Vue.component('Col', Col)
Vue.component('Button', Button)
Vue.filter('decimal', decimal)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Icon from './base/icon'
import { Row, Col, Card } from 'iview'

import './common/less/index.less'

Vue.component('Icon', Icon)
Vue.component('Row', Row)
Vue.component('Card', Card)
Vue.component('Col', Col)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

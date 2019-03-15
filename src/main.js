import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Icon from './base/icon'
import { Row, Col, Card, Drawer } from 'iview'

import 'iview/dist/styles/iview.css'
import './common/less/index.less'

Vue.component('Icon', Icon)
Vue.component('Row', Row)
Vue.component('Card', Card)
Vue.component('Col', Col)
Vue.component('Drawer', Drawer)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

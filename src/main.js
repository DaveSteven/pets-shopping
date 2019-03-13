import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Icon from './components/icon'
import { Row, Col, Card } from 'iview'

import 'iview/dist/styles/iview.css'
import './common/less/index.less'

Vue.component('Icon', Icon)
Vue.component('Row', Row)
Vue.component('Card', Card)
Vue.component('Col', Col)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

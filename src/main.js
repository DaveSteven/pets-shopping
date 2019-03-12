import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Icon from './components/icon'

import './common/less/index.less'

Vue.component('Icon', Icon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

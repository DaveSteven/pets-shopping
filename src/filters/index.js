import { decimal, getRelativeTime } from '../common/js/utils'
import Vue from 'vue'

const _getRelativeTime = (date) => {
  let timestamp = new Date(date).getTime()
  return getRelativeTime(timestamp)
}

Vue.filter('decimal', decimal)
Vue.filter('getRelativeTime', _getRelativeTime)

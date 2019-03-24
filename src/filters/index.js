import { decimal, getRelativeTime, getBirthday } from '../common/js/utils'
import Vue from 'vue'

const _getRelativeTime = (date) => {
  let timestamp = new Date(date).getTime()
  return getRelativeTime(timestamp)
}

const _getBirthday = (date) => {
  let timestamp = new Date(date).getTime()
  return getBirthday(timestamp)
}

Vue.filter('decimal', decimal)
Vue.filter('getRelativeTime', _getRelativeTime)
Vue.filter('getBirthday', _getBirthday)

<template>
  <i v-if="!svg" class="iconfont" :class="iconClass" :style="iconStyle"></i>
  <svg v-else class="svg-icon" aria-hidden="true" :style="iconStyle">
    <use :xlink:href="iconClass"></use>
  </svg>
</template>
<script>
import 'common/fonts/iconfont/iconfont.js'

export default {
  props: {
    type: {
      type: String,
      required: true
    },
    size: {
      type: [Number, String],
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    svg: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    iconClass () {
      if (this.svg) {
        return `#icon-${this.type}`
      }
      return `icon-${this.type}`
    },
    iconStyle () {
      return {
        fontSize: this.size ? `${this.size}px` : '',
        color: this.color ? this.color : ''
      }
    }
  }
}
</script>
<style src="common/fonts/iconfont/iconfont.css" scoped></style>
<style src="./icon.less" lang="less" scoped></style>

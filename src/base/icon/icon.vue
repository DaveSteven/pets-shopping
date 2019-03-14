<template>
  <i class="iconfont" :class="iconClass" :style="iconStyle"></i>
</template>
<script>
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
    }
  },
  computed: {
    iconClass () {
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

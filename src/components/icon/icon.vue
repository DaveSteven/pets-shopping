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
      type: Number,
      default: 16
    },
    color: {
      type: String,
      default: '#363636'
    }
  },
  computed: {
    iconClass () {
      return `icon-${this.type}`
    },
    iconStyle () {
      return {
        fontSize: `${this.size}px`,
        color: `${this.color}`
      }
    }
  }
}
</script>
<style src="common/fonts/iconfont.css" scoped></style>

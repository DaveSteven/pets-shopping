<template>
  <div class="avatar">
    <img :style="avatarStyles" :src="src" alt="">
  </div>
</template>
<script>
export default {
  props: {
    src: {
      type: String,
      default: ''
    },
    width: {
      type: Number,
      default: 50
    }
  },
  computed: {
    avatarStyles () {
      return {
        width: `${this.width}px`,
        height: `${this.width}px`
      }
    }
  }
}
</script>
<style src="./avatar.less" lang="less" scoped></style>

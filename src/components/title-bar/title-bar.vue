<template>
  <div class="title-bar">
    <IconPaw class="icon"></IconPaw>
    <h1 class="title">
      <span class="small-pure-font">{{title}}</span>
    </h1>
    <div class="opt-box">
      <span class="opt-btn prev" @click="handleClick('prev')">
        <Icon type="left-arrow" :size="12"></Icon>
      </span>
      <span class="opt-btn next" @click="handleClick('next')">
        <Icon type="right-arrow" :size="12"></Icon>
      </span>
    </div>
  </div>
</template>
<script>
import IconPaw from '_c/icon-paw'

export default {
  components: {
    IconPaw
  },
  props: {
    title: {
      type: String,
      default: 'Title'
    }
  },
  methods: {
    handleClick (type) {
      this.$emit('on-click', type)
    }
  }
}
</script>
<style src="./title-bar.less" lang="less" scoped></style>
<style src="common/fonts/title-font/title-font.css" scoped></style>

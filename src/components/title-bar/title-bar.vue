<template>
  <div class="title-bar">
    <h1 class="title">
      <span class="paw">
        <Icon type="paw"></Icon>
        <Icon type="paw"></Icon>
      </span>
      {{title}}
    </h1>
    <div class="opt-box">
      <span class="prev">
        <Icon type="left-arrow" :size="14"></Icon>
      </span>
      <span class="next">
        <Icon type="right-arrow" :size="14"></Icon>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Title'
    }
  }
}
</script>
<style src="./title-bar.less" lang="less" scoped></style>

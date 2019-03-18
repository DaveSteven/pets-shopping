<template>
  <transition name="fade">
    <div class="product-tools" v-show="visible">
      <span class="tools-item">
        <Icon type="basket" />
      </span>
        <span class="tools-item">
        <Icon type="preview" />
      </span>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      visible: this.value
    }
  }
}
</script>
<style src="./product-tools.less" lang="less" scoped></style>

<template>
  <div class="cart-control">
    <span class="opt-btn">&#45;</span>
    <span class="count">{{ goods.count }}</span>
    <span class="opt-btn">&#43;</span>
  </div>
</template>
<script>
export default {
  props: {
    goods: {
      type: Object
    }
  }
}
</script>
<style src="./cart-control.less" lang="less" scoped></style>

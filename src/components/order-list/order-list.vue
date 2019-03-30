<template>
  <ul class="order-list">
    <li class="order" v-for="(item, index) in data" :key="index">
      <div class="img"></div>
      <div class="text">
        <p>{{ item.product_name }}</p>
        <p>货到付款 | {{ item.time }}</p>
      </div>
      <div class="opt-box">查看详情</div>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
<style src="./order-list.less" lang="less" scoped></style>

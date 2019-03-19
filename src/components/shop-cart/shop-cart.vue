<template>
  <div class="shop-cart-wrapper">
    <div class="shop-cart-title">
      <div class="cell product">商品</div>
      <div class="cell price">价格</div>
      <div class="cell count">数量</div>
      <div class="cell total">总计</div>
      <div class="cell ops">操作</div>
    </div>
    <div class="shop-cart-list">
      <div class="good" v-for="(item, index) in cartList" :key="index">
        <div class="cell product">
          <div class="img"><img :src="item.img" alt=""></div>
          <div class="name">{{ item.name }}</div>
        </div>
        <div class="cell price">¥{{ item.price | decimal }}</div>
        <div class="cell count">
          <CartControl :good="item"></CartControl>
        </div>
        <div class="cell total">¥{{ item.price * item.count | decimal }}</div>
        <div class="cell ops">删除</div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import CartControl from '_c/cart-control'

export default {
  components: {
    CartControl
  },
  computed: {
    totalPrice () {
      let total = 0
      this.cartList.forEach(good => {
        total += good.price * good.count
      })
      return total
    },
    ...mapGetters([
      'cartList'
    ])
  }
}
</script>
<style src="./shop-cart.less" lang="less" scoped></style>

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
      <div class="good" v-for="(good, index) in cartList" :key="index">
        <div class="cell product">
          <div class="img"><img :src="good.img" alt=""></div>
          <div class="name">{{ good.name }}</div>
        </div>
        <div class="cell price">¥{{ good.price | decimal }}</div>
        <div class="cell count">
          <CartControl :good="good"></CartControl>
        </div>
        <div class="cell total">¥{{ good.price * good.count | decimal }}</div>
        <div class="cell ops" @click="remove(good)">
          <span class="remove">删除</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import CartControl from '_c/cart-control'

export default {
  components: {
    CartControl
  },
  computed: {
    ...mapGetters([
      'cart'
    ]),
    cartList () {
      return this.cart.list
    }
  },
  methods: {
    remove (good) {
      this.removeGood({ good })
    },
    ...mapActions([
      'removeGood'
    ])
  }
}
</script>
<style src="./shop-cart.less" lang="less" scoped></style>

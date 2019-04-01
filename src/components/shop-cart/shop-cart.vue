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
      <div class="goods" v-for="(goods, index) in cartList" :key="index">
        <div class="cell product">
          <div class="img"><img :src="goods.img" alt=""></div>
          <div class="name">{{ goods.name }}</div>
        </div>
        <div class="cell price">¥{{ goods.price | decimal }}</div>
        <div class="cell count">
          <CartControl :goods="goods"></CartControl>
        </div>
        <div class="cell total">¥{{ goods.price * goods.count | decimal }}</div>
        <div class="cell ops" @click="remove(goods)">
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
    remove (goods) {
      this.removeGoods({ goods })
    },
    ...mapActions([
      'removeGoods'
    ])
  }
}
</script>
<style src="./shop-cart.less" lang="less" scoped></style>

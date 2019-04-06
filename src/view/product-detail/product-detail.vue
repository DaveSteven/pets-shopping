<template>
  <div class="product-wrapper">
    <div class="product-panel mb5">
      <div class="product-viewer">
        <div class="thumb"><img v-lazy="product.img" alt=""></div>
        <div class="img"><img v-lazy="product.img" alt=""></div>
      </div>
      <div class="product-info">
        <h1 class="f20 mb20">{{ product.name }}</h1>
        <p class="price mb20">¥{{ product.price }}</p>
        <div class="mb20">
          <CartControl :goods="product"></CartControl>
        </div>
        <Button type="primary" size="large">加入购物车</Button>
      </div>
    </div>
    <div class="product-desc mb40">
      <h1 class="f16 mb20">描述</h1>
      <span>{{ product.description }}</span>
    </div>
    <TitleBar class="mb5" title="你可能喜欢..." :show-button="false" />
    <Products :columns="4" :lines="1" :data="petsData" />
  </div>
</template>
<script>
import { getPet, getPetProduct } from 'common/js/catch'
import TitleBar from '_c/title-bar'
import Products from '_c/products'
import CartControl from '_c/cart-control'
import { Button } from 'iview'

// 接口
import { getPets } from '@/api/product'

export default {
  components: {
    TitleBar,
    Products,
    CartControl,
    Button
  },
  data () {
    return {
      product: {},
      petsData: []
    }
  },
  created () {
    const type = Number.parseInt(this.$route.query.type)
    const id = this.$route.params.id
    if (type === 0) {
      this.product = getPet(id)
    } else {
      this.product = getPetProduct(id)
    }
    this.getPets()
  },
  methods: {
    getPets () {
      getPets().then(res => {
        this.petsData = res.data
      })
    }
  }
}
</script>
<style src="./product-detail.less" lang="less" scoped></style>

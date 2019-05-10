<template>
  <div class="product-wrapper">
    <div class="product-panel mb5">
      <div class="product-viewer">
        <div class="thumb"><img v-lazy="product.img" alt=""></div>
        <div class="img"><img v-lazy="product.img" alt=""></div>
      </div>
      <div class="product-info">
        <h1 class="price mb40">{{ product.name }}</h1>
        <p class="f20 mb20" v-show="product.breed">品种：{{ product.breed }}</p>
        <p class="f20 mb20" v-show="product.color">颜色：{{ product.color }}</p>
        <p class="f20 mb20" v-show="product.nature">习性：{{ product.nature }}</p>
        <p class="f20 mb20" v-show="product.birthday ">年龄：{{ product.birthday | getBirthday }}</p>
        <p class="price mb30" >价格：￥{{ product.price }}</p>
        <div class="mb30" v-if="product.type === 1">
          <span>购买数量：</span>
          <CartControl  class="mr5" ref="cartControl" :goods="product" :control-button="true" size="large"></CartControl>
        </div>
        <Button type="primary" size="large" @click="addCart">加入购物车</Button>
      </div>
    </div>
    <div class="product-desc mb40">
      <h1 class="f16 mb20">描述</h1>
      <span>{{ product.description }}</span>
    </div>
    <TitleBar class="mb5" title="你可能喜欢..." :show-button="false" />
    <Products :columns="2" :lines="1" :data="petsData" />
  </div>
</template>
<script>
import { getPet, getPetProduct } from 'common/js/catch'
import TitleBar from '_c/title-bar'
import Products from '_c/products'
import CartControl from '_c/cart-control'
import { Button, Message } from 'iview'

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
      petsData: [],
      type: null,
      id: null
    }
  },
  created () {
    this.getDetail()
    this.getProduct()
  },
  watch: {
    '$route' (to, from) {
      this.$router.go(0)
    }
  },
  methods: {
    getDetail () {
      const type = this.$route.query.type
      const id = this.$route.params.id
      if (type === 'pet') {
        this.product = getPet(id)
      } else if (type === 'supply') {
        this.product = getPetProduct(id)
      }
    },
    addCart () {
      this.$refs.cartControl.add()
      Message.success('添加成功！')
    },
    getProduct () {
      getPets().then(res => {
        if (res.data.length) {
          this.petsData.push(res.data[0])
          this.petsData.push(res.data[1])
        }
      })
    }
  }
}
</script>
<style src="./product-detail.less" lang="less" scoped></style>

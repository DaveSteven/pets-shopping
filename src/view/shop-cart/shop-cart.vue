<template>
  <div>
    <TitleBar class="mb5" title="购物车详情" :show-button="false" />
    <ShopCart class="mb30" />
    <Row type="flex" :gutter="40" justify="space-between">
      <Col span="12">
        <TitleBar class="mb5" title="您可能喜欢..." />
        <Products :data="petsList" :columns="2" :lines="1" />
      </Col>
      <Col span="12">
        <TitleBar class="mb5" title="总计" :show-button="false" />
        <div class="cart-totals">
          <Card class="mb20">
            <div class="cell">
              <div class="label">小计</div>
              <div>¥{{ total }}</div>
            </div>
            <div class="cell">
              <div class="label">运送</div>
              <div>
                <p>免费送货</p>
                <p>计算运费</p>
              </div>
            </div>
            <div class="cell">
              <div class="label">总计</div>
              <div>¥{{ total }}</div>
            </div>
          </Card>
          <Button long type="primary" size="large">结算</Button>
        </div>
      </Col>
    </Row>
  </div>
</template>
<script>
import TitleBar from '_c/title-bar'
import ShopCart from '_c/shop-cart'
import Products from '_c/products'
import petsData from '@/mock/products/pets'
import { mapGetters } from 'vuex'

export default {
  components: {
    TitleBar,
    ShopCart,
    Products
  },
  data () {
    return {
      petsList: []
    }
  },
  computed: {
    ...mapGetters([
      'cart'
    ]),
    total () {
      return this.cart.total
    }
  },
  created () {
    this.getProduct()
  },
  methods: {
    getProduct () {
      setTimeout(() => {
        this.petsList = petsData.data
      }, 100)
    }
  }
}
</script>
<style src="./shop-cart.less" lang="less" scoped></style>

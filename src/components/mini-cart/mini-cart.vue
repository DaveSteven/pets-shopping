<template>
  <div class="cart-wrapper">
    <Dropdown placement="bottom-end" trigger="click">
      <div class="cart-btn">
        <span><Icon type="cart" :size="14" />购物车</span>
        <Icon type="down-arrow" :size="12" />
      </div>
      <DropdownMenu slot="list">
        <div class="cart-container">
          <template v-if="cartList.length">
            <ul class="cart-list">
              <li class="cart-item" v-for="(item, index) in cartList" :key="index">
                <div class="img"><img :src="item.img"></div>
                <div class="text">
                  <h5 class="title">{{ item.name }}</h5>
                  <div class="price">
                    {{ item.count }} x <span class="text-primary f16">¥{{ item.price | decimal }}</span>
                  </div>
                </div>
              </li>
            </ul>
            <div class="text-right text-bold pr20 mb10 f14">总计：¥{{ total }}</div>
            <Row type="flex" justify="space-between">
              <Col><Button type="default" @click="viewDetail">查看详情</Button></Col>
              <Col><Button type="primary" @click="checkout">结算</Button></Col>
            </Row>
          </template>
          <div v-else class="text-primary text-bold">购物车是空的～</div>
        </div>
      </DropdownMenu>
    </Dropdown>
    <div class="cart-num">{{ totalCount }}</div>
  </div>
</template>
<script>
import { Dropdown, DropdownMenu } from 'iview'
import { mapGetters } from 'vuex'

export default {
  components: {
    Dropdown,
    DropdownMenu
  },
  computed: {
    ...mapGetters([
      'cart'
    ]),
    cartList () {
      return this.cart.list
    },
    total () {
      return this.cart.total
    },
    totalCount () {
      return this.cartList.length
    }
  },
  methods: {
    viewDetail () {
      this.$router.push({
        path: '/cart'
      })
    },
    checkout () {}
  }
}
</script>
<style src="./mini-cart.less" lang="less" scoped></style>

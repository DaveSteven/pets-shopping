<template>
  <div class="mini-cart">
    <Dropdown
      placement="bottom-end"
      trigger="hover"
      @on-visible-change="visibleChange"
    >
      <div class="mini-cart-btn">
        <span><Icon type="cart" :size="14" />购物车</span>
        <Icon type="down-arrow" :size="12" />
      </div>
      <DropdownMenu class="mini-cart-drop_list" ref="drop" slot="list">
        <template v-if="cartList.length">
          <Scroll ref="scroll" class="cart-list-wrapper" :data="cartList">
            <ul class="cart-list">
              <li class="cart-item" v-for="(item, index) in cartList" :key="index">
                <div class="img"><img @load="loadImage" v-lazy="item.img"></div>
                <div class="text">
                  <h5 class="title">{{ item.name }}</h5>
                  <div class="price">
                    {{ item.count }} x <span class="text-primary f16">¥{{ item.price | decimal }}</span>
                  </div>
                </div>
              </li>
            </ul>
          </Scroll>
          <div class="text-right text-bold pr20 mb10 f14">总计：¥{{ total }}</div>
          <Row type="flex" justify="space-between">
            <Col><Button type="default" @click="viewDetail">查看详情</Button></Col>
            <Col><Button type="primary" @click="viewDetail">结算</Button></Col>
          </Row>
        </template>
        <div v-else class="text-primary text-bold">购物车是空的～</div>
      </DropdownMenu>
    </Dropdown>
    <div class="mini-cart-num">{{ totalCount }}</div>
  </div>
</template>
<script>
import Scroll from '_b/scroll'
import { Dropdown, DropdownMenu } from 'iview'
import { mapGetters } from 'vuex'
import ScrollbarMixins from 'iview/src/components/modal/mixins-scrollbar'

export default {
  components: {
    Dropdown,
    DropdownMenu,
    Scroll
  },
  mixins: [ ScrollbarMixins ],
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
  data () {
    return {
      checkLoaded: false,
      menuVisible: false
    }
  },
  methods: {
    viewDetail () {
      this.$router.push({
        path: '/cart'
      })
    },
    checkout () {
      this.$router.push({
        path: '/checkout'
      })
    },
    menuClick () {
      console.log('1')
      this.menuVisible = !this.menuVisible
    },
    visibleChange (visible) {
      if (visible) {
        this.addScrollEffect()
        // 每次打开之后要重新计算scroll，不然不会滚动
        this.$nextTick(() => {
          this.$refs.scroll.refresh()
        })
      } else {
        this.removeScrollEffect()
      }
    },
    loadImage () {
      if (!this.checkLoaded) {
        this.$refs.scroll.refresh()
        this.checkLoaded = true
      }
    }
  }
}
</script>
<style src="./mini-cart.less" lang="less" scoped></style>

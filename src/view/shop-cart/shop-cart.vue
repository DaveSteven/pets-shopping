<template>
  <div>
    <TitleBar class="mb5" title="购物车详情" :show-button="false" />
    <ShopCart />
  </div>
</template>
<script>
import TitleBar from '_c/title-bar'
import ShopCart from '_c/shop-cart'

export default {
  components: {
    TitleBar,
    ShopCart
  }
}
</script>
<style src="./shop-cart.less" lang="less" scoped></style>

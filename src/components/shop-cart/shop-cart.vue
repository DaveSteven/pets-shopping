<template>
  <div class="cart-wrapper">
    <Dropdown>
      <div class="cart-container">
        <span><Icon type="cart" :size="14" />购物车</span>
        <Icon type="down-arrow" :size="12" />
      </div>
      <DropdownMenu slot="list">
        <div class="cart-list">
          <ul>
            <li class="cart-item"></li>
          </ul>
        </div>
      </DropdownMenu>
    </Dropdown>
    <div class="cart-num"></div>
  </div>
</template>
<script>
import { Dropdown, DropdownMenu } from 'iview'

export default {
  components: {
    Dropdown,
    DropdownMenu
  }
}
</script>
<style src="./shop-cart.less" lang="less" scoped></style>

<template>
  <Affix @on-change="stateChange" :offset-top="-1">
    <div class="header-wrapper" :class="{'fixed': isFixed}">
      <div class="container">
        <header>
          <NavDrawer class="mr10"></NavDrawer>
          <Logo class="mr30"></Logo>
          <Search class="mr70"></Search>
          <MiniCart></MiniCart>
          <UserMenu></UserMenu>
        </header>
      </div>
    </div>
  </Affix>
</template>
<script>
import NavDrawer from '_c/nav-drawer'
import Logo from '_c/logo'
import Search from '_c/search'
import MiniCart from '_c/mini-cart'
import UserMenu from '_c/user-menu'
import { Affix, Message } from 'iview'

export default {
  components: {
    NavDrawer,
    Logo,
    Search,
    MiniCart,
    UserMenu,
    Affix
  },
  data () {
    return {
      isFixed: false
    }
  },
  methods: {
    stateChange (state) {
      this.isFixed = state
    }
  }
}
</script>
<style src="./header.less" lang="less" scoped></style>

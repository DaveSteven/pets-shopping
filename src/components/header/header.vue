<template>
  <div class="header-wrapper">
    <div class="container">
      <header>
        <NavDrawer class="mr10"></NavDrawer>
        <Logo class="mr30"></Logo>
        <Search class="mr70"></Search>
        <MiniCart></MiniCart>
        <UserPanel></UserPanel>
      </header>
    </div>
  </div>
</template>
<script>
import NavDrawer from '_c/nav-drawer'
import Logo from '_c/logo'
import Search from '_c/search'
import MiniCart from '_c/mini-cart'
import UserPanel from '_c/user-panel'

export default {
  components: {
    NavDrawer,
    Logo,
    Search,
    MiniCart,
    UserPanel
  }
}
</script>
<style src="./header.less" lang="less" scoped></style>

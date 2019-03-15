<template>
  <div class="header-wrapper">
    <div class="container">
      <header>
        <NavDrawer class="mr10"></NavDrawer>
        <Logo class="mr30"></Logo>
        <Search class="mr50"></Search>
        <Cart></Cart>
        <UserPanel></UserPanel>
      </header>
    </div>
  </div>
</template>
<script>
import NavDrawer from '_c/nav-drawer'
import Logo from '_c/logo'
import Search from '_c/search'
import Cart from '_c/cart'
import UserPanel from '_c/user-panel'

export default {
  components: {
    NavDrawer,
    Logo,
    Search,
    Cart,
    UserPanel
  }
}
</script>
<style src="./header.less" lang="less" scoped></style>

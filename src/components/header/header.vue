<template>
  <div class="header-wrapper">
    <div class="container">
      <header>
        <NavSwitch></NavSwitch>
        <Logo></Logo>
        <Search style="margin-right: 50px"></Search>
        <Cart></Cart>
        <UserPanel></UserPanel>
      </header>
    </div>
  </div>
</template>
<script>
import NavSwitch from '_c/nav-switch'
import Logo from '_c/logo'
import Search from '_c/search'
import Cart from '_c/cart'
import UserPanel from '_c/user-panel'

export default {
  components: {
    NavSwitch,
    Logo,
    Search,
    Cart,
    UserPanel
  }
}
</script>
<style src="./header.less" lang="less" scoped></style>

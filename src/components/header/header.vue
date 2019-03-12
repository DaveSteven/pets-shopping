<template>
  <div class="header-wrapper">
    <div class="container">
      <header>
        <NavSwitch></NavSwitch>
        <Logo></Logo>
        <Search></Search>
      </header>
    </div>
  </div>
</template>
<script>
import NavSwitch from '_c/nav-switch'
import Logo from '_c/logo'
import Search from '_c/search'

export default {
  components: {
    NavSwitch,
    Logo,
    Search
  }
}
</script>
<style src="./header.less" lang="less" scoped></style>

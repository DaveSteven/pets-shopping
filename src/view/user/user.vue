<template>
  <div class="user-wrapper">
    <div class="user-side-menu">
      <TitleBar class="mb5" :show-button="false" title="用户导航" />
      <SideMenu />
    </div>
    <div class="user-panel">
      <TitleBar class="mb5" :show-button="false" :title="menuTitle"/>
      <router-view />
    </div>
  </div>
</template>
<script>
import TitleBar from '_c/title-bar'
import SideMenu from './components/sideMenu'
import store from '@/store'

export default {
  components: {
    TitleBar,
    SideMenu
  },
  computed: {
    menuTitle () {
      return this.$route.meta.title
    }
  },
  beforeRouteEnter (to, from, next) {
    store.commit('SET_USER_MENU_ACTIVE_NAME', to.meta.parentName || to.name)
    next()
  }
}
</script>
<style src="./user.less" lang="less" scoped></style>

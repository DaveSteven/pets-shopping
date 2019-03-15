<template>
  <div class="nav-drawer">
    <div class="nav-drawer-btn" :class="{open: visible}" @click="handleClick">
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </div>
    <Drawer
      title="主页菜单"
      placement="left"
      :closable="true"
      :mask="false"
      width="290"
      v-model="visible"
      :styles="{
        'background-color': '#37383c'
      }"
    >
      <div class="menu-header" slot="header">主页菜单</div>
      <div class="menu-close" slot="close"><Icon type="close" :size="20"></Icon></div>
      <div class="menu-wrapper">
        <SideMenu :menu-list="menuList"></SideMenu>
      </div>
    </Drawer>
  </div>
</template>
<script>
import { Drawer } from 'iview'
import SideMenu from './components/side-menu'

export default {
  components: {
    Drawer,
    SideMenu
  },
  data () {
    return {
      visible: false
    }
  },
  computed: {
    menuList () {
      return this.$store.getters.menuList
    }
  },
  methods: {
    handleClick (event) {
      this.$emit('click', event)
      this.visible = !this.visible
    }
  }
}
</script>
<style src="./nav-drawer.less" lang="less" scoped></style>

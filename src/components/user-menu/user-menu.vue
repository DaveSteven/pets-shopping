<template>
  <div class="user-panel">
    <Dropdown class="dropdown" @on-click="dropdownClick">
      <span class="tool-btn"><Icon type="user" :size="20"></Icon></span>
      <DropdownMenu slot="list">
        <DropdownItem name="login"><Icon type="login" class="mr5" />登录</DropdownItem>
        <DropdownItem name="reg"><Icon type="pencil" class="mr5" />注册</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <span v-if="unLogin" class="tool-btn"><Icon type="setting" :size="20"></Icon></span>
  </div>
</template>
<script>
import { Dropdown, DropdownMenu, DropdownItem } from 'iview'
import { mapMutations } from 'vuex'

export default {
  components: {
    Dropdown,
    DropdownMenu,
    DropdownItem
  },
  data () {
    return {
      type: 'login',
      unLogin: false
    }
  },
  methods: {
    dropdownClick (name) {
      this.type = name
      this.setLoginVisible(true)
    },
    ...mapMutations({
      'setLoginVisible': 'SET_LOGIN_VISIBLE'
    })
  }
}
</script>
<style src="./user-menu.less" lang="less" scoped></style>

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
    <Modal v-model="loginVisible" :footer-hide="true" :closable="false">
      <div class="login-body">
        <span class="modal-close-btn" @click="close"><Icon type="close"></Icon></span>
        <Login></Login>
      </div>
    </Modal>
  </div>
</template>
<script>
import { Dropdown, DropdownMenu, DropdownItem, Modal } from 'iview'
import Login from '_c/login'

export default {
  components: {
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Modal,
    Login
  },
  data () {
    return {
      loginVisible: false,
      type: 'login',
      unLogin: false
    }
  },
  methods: {
    close () {
      this.loginVisible = false
    },
    dropdownClick (name) {
      this.type = name
      this.loginVisible = true
    }
  }
}
</script>
<style src="./user-panel.less" lang="less" scoped></style>

<template>
  <div class="user-panel">
    <Dropdown v-if="!logined" class="dropdown" @on-click="dropdownClick">
      <span class="tool-btn"><Icon type="user" :size="20"></Icon></span>
      <DropdownMenu slot="list">
        <DropdownItem name="login"><Icon type="login" class="mr5" />登录</DropdownItem>
        <DropdownItem name="register"><Icon type="pencil" class="mr5" />注册</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <div v-if="logined" class="user-info">
      <div class="info">
        <Avatar class="mb5" :src="user.avatar" :width="40"></Avatar>
        <span>{{ user.name }}</span>
      </div>
      <Dropdown class="dropdown" @on-click="handleSetting">
        <span class="tool-btn"><Icon type="setting" :size="20"></Icon></span>
        <DropdownMenu slot="list">
          <DropdownItem name="user">用户中心</DropdownItem>
          <DropdownItem name="logout">退出</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  </div>
</template>
<script>
import Avatar from '_b/avatar'
import { Dropdown, DropdownMenu, DropdownItem } from 'iview'
import { mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  components: {
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Avatar
  },
  computed: {
    ...mapGetters([
      'user',
      'logined'
    ])
  },
  created () {
    this.getUserInformation()
  },
  methods: {
    dropdownClick (type) {
      this.setLoginAction(type)
      this.setLoginVisible(true)
    },
    handleSetting (type) {
      if (type === 'user') {
        this.$router.push({
          path: '/user'
        })
      } else if (type === 'logout') {
        this.logout()
      }
    },
    logout () {
      this.userLogout().then(() => {
        this.$router.push({
          path: '/'
        })
      })
    },
    ...mapMutations({
      'setLoginVisible': 'SET_LOGIN_VISIBLE',
      'setLoginAction': 'SET_LOGIN_ACTION'
    }),
    ...mapActions([
      'getUserInformation',
      'userLogout'
    ])
  }
}
</script>
<style src="./user-menu.less" lang="less" scoped></style>

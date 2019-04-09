<template>
  <Menu theme="light" :active-name="userMenuActiveName" @on-select="select">
    <MenuGroup
      v-for="(item, index) in userMenuList"
      :title="item.title"
      :key="index"
    >
      <MenuItem v-for="(route, routeIndex) in item.routes" :name="route.name" :key="routeIndex">
        {{ route.meta.title }}
      </MenuItem>
    </MenuGroup>
  </Menu>
</template>
<script>
import { Menu, MenuGroup, MenuItem } from 'iview'
import { mapGetters } from 'vuex'

export default {
  components: {
    Menu,
    MenuGroup,
    MenuItem
  },
  computed: {
    ...mapGetters([
      'userMenuList',
      'userMenuActiveName'
    ])
  },
  methods: {
    select (name) {
      this.$router.push({
        name
      })
    }
  }
}
</script>

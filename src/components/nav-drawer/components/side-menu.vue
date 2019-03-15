<template>
  <Menu theme="dark" width="100%" :active-name="activeName">
    <template v-for="(item, index) in menuList">
      <MenuItem v-if="!item.children" :name="item.name" :key="index">{{ item.meta.title }}</MenuItem>
      <Submenu v-if="item.children && item.children.length" :name="item.name" :key="index">
        <MenuItem v-for="(sub, subIndex) in item.children" :key="subIndex" :name="sub.name">{{ sub.title }}</MenuItem>
      </Submenu>
    </template>
  </Menu>
</template>
<script>
import { Menu, MenuItem, Submenu } from 'iview'

export default {
  props: {
    menuList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    Menu,
    MenuItem,
    Submenu
  },
  watch: {
    '$route': function (route) {
      this.activeName = route.name
    }
  },
  data () {
    return {
      activeName: ''
    }
  }
}
</script>

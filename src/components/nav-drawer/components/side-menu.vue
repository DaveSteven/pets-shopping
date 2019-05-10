<template>
  <Menu theme="dark" width="100%" :active-name="activeName" @on-select="select">
    <template v-for="(item, index) in menuList">
      <MenuItem v-if="!item.children" :name="item.name" :key="index">{{ item.meta.title }}</MenuItem>
      <Submenu v-if="item.children && item.children.length" :name="item.name" :key="index">
        <template slot="title">{{ item.meta.title }}</template>
        <MenuItem v-for="(sub, subIndex) in item.children" :key="subIndex" :name="sub.name">{{ sub.meta.title }}</MenuItem>
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
  created () {
    this.activeName = this.$route.name
  },
  data () {
    return {
      activeName: ''
    }
  },
  methods: {
    select (name) {
      this.$emit('select')
      if (name === 'Home' || name === 'Blog') {
        this.$router.push({ name })
      } else {
        this.$router.push({
          path: `/pet/` + name,
          query: {
            type: name
          }
        })
      }
    }
  }
}
</script>

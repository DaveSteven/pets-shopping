<template>
  <div class="nav-drawer">
    <div class="nav-drawer-btn" :class="{open: visible}" @click="handleClick">
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </div>
    <Drawer title="Basic Drawer" placement="left" :closable="true" :mask="false" v-model="visible">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  </div>
</template>
<script>
export default {
  data () {
    return {
      visible: false
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

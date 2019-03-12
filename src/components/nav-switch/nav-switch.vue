<template>
  <div class="nav-switch" @click="handleClick">
    <span class="line"></span>
    <span class="line"></span>
    <span class="line"></span>
  </div>
</template>
<script>
export default {
  methods: {
    handleClick (event) {
      this.$emit('click', event)
    }
  }
}
</script>
<style src="./nav-switch.less" lang="less" scoped></style>

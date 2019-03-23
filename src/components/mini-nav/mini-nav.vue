<template>
  <div class="mini-nav">
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: []
    }
  },
  created () {
    console.log(this.$route)
  }
}
</script>
<style src="./mini-nav.less" lang="less" scoped></style>

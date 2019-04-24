<template>
  <Card dis-hover :bordered="false">
    <h1 class="title">{{ blogData.title }}</h1>
    <div class="text-right f12 p10">
      <span class="mr15">作者：{{ blogData.user_name }}</span>
      <span>时间：{{ blogData.time | getRelativeTime }}</span>
    </div>
    <div class="content">
      <div class="cover">
        <img :src="blogData.img" alt="">
      </div>
      <div class="text" v-html="blogData.content"></div>
    </div>
  </Card>
</template>
<script>
import { getBlogData } from 'common/js/catch'

export default {
  data () {
    return {
      blogData: {}
    }
  },
  watch: {
    '$route' (val) {
      if (val.name === 'BlogDetail') {
        this.blogData = getBlogData(val.params.id)
      }
    }
  },
  created () {
    this.blogData = getBlogData(this.$route.params.id)
  }
}
</script>
<style src="./blog-detail.less" lang="less" scoped></style>

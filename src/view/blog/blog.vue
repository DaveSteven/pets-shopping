<template>
  <div class="blog">
    <TitleBar class="mb5" title="热门博客"></TitleBar>
    <BlogArticles class="mb20" :columns="3" :data="blogData" :lines="1"></BlogArticles>
    <TitleBar class="mb5" title="最新发布"></TitleBar>
    <BlogArticles :columns="3" :data="blogData" :lines="3" class="mb5"></BlogArticles>
  </div>
</template>
<script>
import TitleBar from '_c/title-bar'
import BlogArticles from '_c/blog-articles'

import blogData from '@/mock/blog'

export default {
  components: {
    TitleBar,
    BlogArticles
  },
  data () {
    return {
      blogData: []
    }
  },
  created () {
    this.getBlogData()
  },
  methods: {
    getBlogData () {
      setTimeout(() => {
        this.blogData = blogData.data
      }, 200)
    }
  }
}
</script>
<style src="./blog.less" lang="less" scoped></style>

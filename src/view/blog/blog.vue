<template>
  <div class="blog">
    <TitleBar class="mb5" title="最新博客"></TitleBar>
    <BlogArticles class="mb20" :columns="3" :data="blogData" :lines="4" @select="select"></BlogArticles>
  </div>
</template>
<script>
import TitleBar from '_c/title-bar'
import BlogArticles from '_c/blog-articles'

// import blogData from '@/mock/blog'
import { saveBlogData } from 'common/js/catch'
import { getArticles } from '@/api/blog'

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
      getArticles().then(res => {
        setTimeout(() => {
          this.blogData = res.data
        }, 200)
      })
    },
    select (data) {
      saveBlogData(data.id, data)
      this.$router.push({
        path: `/blog/${data.id}`
      })
    }
  }
}
</script>
<style src="./blog.less" lang="less" scoped></style>

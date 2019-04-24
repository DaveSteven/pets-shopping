<template>
  <div class="user-blog">
    <Card :bordered="false" dis-hover v-show="!articleList.length">
      <div class="p30">
        <p class="mb15">您还没有发表博客哦～</p>
        <p><a href="javascript:;" @click="addArticle">去发表</a></p>
      </div>
    </Card>
    <BlogArticles
      v-show="articleList.length"
      :data="articleList"
      :columns="2"
      size="small"
      @select="select"
    ></BlogArticles>
  </div>
</template>
<script>
import { getArticlesByUser } from '@/api/blog'
import BlogArticles from '_c/blog-articles'
import { saveBlogData } from 'common/js/catch'

export default {
  components: {
    BlogArticles
  },
  data () {
    return {
      articleList: []
    }
  },
  created () {
    this.getArticlesByUser()
  },
  methods: {
    getArticlesByUser () {
      getArticlesByUser().then(res => {
        this.articleList = res.data || []
      })
    },
    addArticle () {
      this.$router.push({
        path: '/user/blog/add'
      })
    },
    select (data) {
      saveBlogData(`${data.id}`, data)
      this.$router.push({
        path: `/blog/${data.id}`
      })
    }
  }
}
</script>
<style src="./user-blog.less" lang="less" scoped></style>

<template>
  <div class="user-blog">
    <Card :bordered="false" dis-hover v-show="!articleList.length">
      <div class="p30">
        <p class="mb15">您还没有发表博客哦～</p>
        <p><a href="javascript:;" @click="addArticle">去发表</a></p>
      </div>
    </Card>
  </div>
</template>
<script>
import { getArticlesByUser } from '@/api/blog'

export default {
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
    }
  }
}
</script>
<style src="./user-blog.less" lang="less" scoped></style>

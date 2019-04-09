<template>
  <div></div>
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
        this.articleList = res.data
      })
    }
  }
}
</script>
<style src="./user-blog.less" lang="less" scoped></style>

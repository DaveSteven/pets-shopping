<template>
  <div class="blog-form-wrapper">
    <Card :bordered="false" dis-hover>
      <BlogForm ref="blogForm" @on-success-valid="submit" />
    </Card>
  </div>
</template>
<script>
import BlogForm from '_c/blog-form'
import { addArticle } from '@/api/blog'

export default {
  components: {
    BlogForm
  },
  methods: {
    submit (data) {
      addArticle({
        ...data
      }).then(res => {
        console.log(res)
      })
    }
  }
}
</script>
<style src="./add-blog.less" lang="less" scoped></style>

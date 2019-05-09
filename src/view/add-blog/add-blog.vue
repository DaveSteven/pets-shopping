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
import { Message } from 'iview'

export default {
  components: {
    BlogForm
  },
  methods: {
    submit (data) {
      addArticle({
        ...data
      }).then(res => {
        Message.success('发表成功！')
        setTimeout(() => {
          this.$router.push({
            path: '/user/blog'
          })
        }, 500)
      })
    }
  }
}
</script>
<style src="./add-blog.less" lang="less" scoped></style>

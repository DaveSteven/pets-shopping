<template>
  <div>
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
    <div class = "mt5 commentdiv">
      <span style="display:block;color:#999">在这里发表你的看法~</span>
      <input class="mt10 mb5 comment-input" v-model="comment" type="text"></input>
      <button type="submit" @click="postComment()" class="ivu-btn ivu-btn-primary fr">发表评论</button>
    </div>
    <CommentForm class="mb20" :columns="1" :data="comments" :lines="1"></CommentForm>
  </div>
</template>
<script>
import { getBlogData } from 'common/js/catch'
import CommentForm from '_c/comment-form'
import { getCommentList, addComment } from '@/api/blog'
import { Message } from 'iview'

export default {
  components: {
    CommentForm
    // Input
  },
  data () {
    return {
      blogData: {},
      comments: [],
      post_id: 0,
      comment: ''
    }
  },
  watch: {
    '$route' (val) {
      if (val.name === 'BlogDetail') {
        this.blogData = getBlogData(val.params.id)
        this.post_id = val.params.id
        this.getComments(val.params.id)
      }
    }
  },
  created () {
    this.blogData = getBlogData(this.$route.params.id)
    this.post_id = this.$route.params.id
    this.getComments(this.$route.params.id)
  },
  methods: {
    getComments (id) {
      getCommentList(id).then(res => {
        setTimeout(() => {
          this.comments = res.data
        }, 200)
      })
    },
    postComment () {
      debugger
      addComment(this.post_id, this.comment).then(res => {
        if (res.code === 200) {
          Message.success('上传成功')
          this.getComments(this.post_id)
        }
      })
    }
  }
}
</script>
<style src="./blog-detail.less" lang="less" scoped></style>

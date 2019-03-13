<template>
  <div>
    <Blogs :columns="3" :data="BlogData" :show-number="3" size="small"></Blogs>
  </div>
</template>
<script>
import BlogData from '@/mock/blog'
import Blogs from '_c/blogs'

export default {
  components: {
    Blogs
  },
  data () {
    return {
      BlogData: []
    }
  },
  created () {
    this.getBlogData()
  },
  methods: {
    getBlogData () {
      setTimeout(() => {
        this.BlogData = BlogData.data
      }, 200)
    }
  }
}
</script>

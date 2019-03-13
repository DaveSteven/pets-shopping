<template>
  <div>
    <Blogs :columns="3" :data="blogData" :show-number="3" size="small" class="mb5"></Blogs>
    <HomeSlider :data="sliderData" class="mb30"></HomeSlider>
    <Products></Products>
  </div>
</template>
<script>
import blogData from '@/mock/blog'
import sliderData from '@/mock/slider'
import Blogs from '_c/blogs'
import HomeSlider from '_c/home-slider'
import Products from '_c/products'

export default {
  components: {
    Blogs,
    HomeSlider,
    Products
  },
  data () {
    return {
      blogData: [],
      sliderData: []
    }
  },
  created () {
    this.getBlogData()
    this.getSliderData()
  },
  methods: {
    getBlogData () {
      setTimeout(() => {
        this.blogData = blogData.data
      }, 200)
    },
    getSliderData () {
      setTimeout(() => {
        this.sliderData = sliderData.data
      })
    }
  }
}
</script>

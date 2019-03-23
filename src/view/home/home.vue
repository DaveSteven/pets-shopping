<template>
  <div>
    <BlogArticles :columns="3" :data="blogData" :lines="1" size="small" class="mb5"></BlogArticles>
    <HomeSlider :data="sliderData" class="mb30"></HomeSlider>
    <TitleBar class="mb5" title="今日萌宠"></TitleBar>
    <Products :columns="4" :lines="2" :data="petsData" class="mb30"></Products>
    <TitleBar class="mb5" title="萌宠用品"></TitleBar>
    <Products title="萌宠用品" :columns="4" :lines="2" :data="suppliesData"></Products>
  </div>
</template>
<script>
import BlogArticles from '_c/blog-articles'
import HomeSlider from '_c/home-slider'
import Products from '_c/products'
import TitleBar from '_c/title-bar'
// mock
import blogData from '@/mock/blog'
import sliderData from '@/mock/slider'
import petsData from '@/mock/products/pets'
import suppliesData from '@/mock/products/supplies'

export default {
  components: {
    BlogArticles,
    HomeSlider,
    Products,
    TitleBar
  },
  data () {
    return {
      blogData: [],
      sliderData: [],
      petsData: [],
      suppliesData: []
    }
  },
  created () {
    this.getBlogData()
    this.getSliderData()
    this.getPetsData()
    this.getSuppliesData()
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
    },
    getPetsData () {
      setTimeout(() => {
        this.petsData = petsData.data
      })
    },
    getSuppliesData () {
      setTimeout(() => {
        this.suppliesData = suppliesData.data
      })
    }
  }
}
</script>

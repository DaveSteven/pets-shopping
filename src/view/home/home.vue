<template>
  <div>
    <BlogArticles :columns="3" :data="blogData" :lines="1" size="small" class="mb5" @select="selectBlog"></BlogArticles>
    <HomeSlider :data="sliderData" class="mb30"></HomeSlider>
    <TitleBar class="mb5" title="今日萌宠"></TitleBar>
    <Products :columns="4" :lines="2" :data="petsData" class="mb30"  @select="select"></Products>
    <TitleBar class="mb5" title="萌宠用品"></TitleBar>
    <Products title="萌宠用品" :columns="4" :lines="2" :data="suppliesData" @select="select"></Products>
  </div>
</template>
<script>
// 组件
import BlogArticles from '_c/blog-articles'
import HomeSlider from '_c/home-slider'
import Products from '_c/products'
import TitleBar from '_c/title-bar'
// 接口
import { getSupplies, getPets } from '@/api/product'
import { getArticles } from '@/api/blog'
// mock
// import blogData from '@/mock/blog'
import sliderData from '@/mock/slider'
import { savePet, savePetProduct, saveBlogData } from 'common/js/catch'

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
      getArticles().then(res => {
        setTimeout(() => {
          this.blogData = res.data
        }, 200)
      })
    },
    getSliderData () {
      setTimeout(() => {
        this.sliderData = sliderData.data
      })
    },
    getPetsData () {
      getPets().then(res => {
        this.petsData = res.data
      })
    },
    getSuppliesData () {
      getSupplies().then(res => {
        this.suppliesData = res.data
      })
    },
    select (goods) {
      let type = ''
      if (goods.breed) {
        savePet(goods)
        type = 'pet'
      } else {
        savePetProduct(goods)
        type = 'supply'
      }
      this.$router.push({
        path: `/product/${goods.id}`,
        query: {
          type: type
        }
      })
    },
    selectBlog (blog) {
      saveBlogData(blog.id, blog)
      this.$router.push({
        path: `/blog/${blog.id}`
      })
    }
  }
}
</script>

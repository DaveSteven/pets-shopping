<template>
  <div>
    <Blogs :columns="3" :data="blogData" :lines="1" size="small" class="mb5"></Blogs>
    <HomeSlider :data="sliderData" class="mb30"></HomeSlider>
    <Products title="今日萌宠" :columns="4" :lines="2" :data="petsData" class="mb30"></Products>
    <Products title="萌宠用品" :columns="4" :lines="2" :data="suppliesData"></Products>
  </div>
</template>
<script>
import Blogs from '_c/blogs'
import HomeSlider from '_c/home-slider'
import Products from '_c/products'
// mock
import blogData from '@/mock/blog'
import sliderData from '@/mock/slider'
import petsData from '@/mock/products/pets'
import suppliesData from '@/mock/products/supplies'
export default {
  components: {
    Blogs,
    HomeSlider,
    Products
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

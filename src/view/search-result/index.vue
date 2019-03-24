<template>
  <div v-if="petsData.length || suppliesData.length">
    <TitleBar v-if="petsData.length" class="mb5" title="今日萌宠"></TitleBar>
    <Products v-if="petsData.length" :columns="4" :lines="2" :data="petsData" class="mb30" @select="select"></Products>
    <TitleBar v-if="suppliesData.length" class="mb5" title="萌宠用品"></TitleBar>
    <Products v-if="suppliesData.length" title="萌宠用品" :columns="4" :lines="2" :data="suppliesData" @select="select"></Products>
  </div>
  <div v-else class="f20 m15">
    <p>没有这类商品哦，要不要换个关键词再查一下呢</p>
  </div>
</template>
<script>
// 组件
import Products from '_c/products'
import TitleBar from '_c/title-bar'
// 接口
import { getSuppliesByKeyWord, getPetsByKeyWord } from '@/api/product'
// mock
import { savePet, savePetProduct } from 'common/js/catch'
import { debug } from 'util'

export default {
  components: {
    Products,
    TitleBar
  },
  data () {
    return {
      petsData: [],
      suppliesData: [],
      keyWord: null,
      type: null
    }
  },
  watch: {
    keyWord (newVal) {
      this.reload()
    }
  },
  created () {
    this.keyWord = this.$route.query.keyWord
    this.type = this.$route.query.type
    this.reload()
  },
  methods: {
    reload () {
      if (this.type === 1) {
        this.getPetsData()
      } else if (this.type === 2) {
        this.getSuppliesData()
      } else {
        this.getPetsData()
        this.getSuppliesData()
      }
    },
    getPetsData () {
      getPetsByKeyWord(this.keyWord).then(res => {
        this.petsData = res.data
      })
    },
    getSuppliesData () {
      getSuppliesByKeyWord(this.keyWord).then(res => {
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
    }
  }
}
</script>

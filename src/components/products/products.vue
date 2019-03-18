<template>
  <div class="products">
    <TitleBar class="mb5" :title="title" @on-click="onClick"></TitleBar>
    <Row :gutter="5" class="product-list">
      <Col class="product-item" :span="span" v-for="item in productList" :key="item.id">
      <Card :bordered="false">
        <div class="product-container">
          <div class="cover mb10"><img :src="item.img" alt=""></div>
          <div class="name mb5">{{ item.name }}</div>
          <div class="price">¥{{ item.price }}</div>
          <ProductTools v-model="item.visible"></ProductTools>
        </div>
      </Card>
      </Col>
    </Row>
  </div>
</template>
<script>
import TitleBar from '_c/title-bar'
import ProductTools from '_c/product-tools'
import { oneOf } from 'common/js/utils'
import listMixins from '@/mixins/list'

export default {
  mixins: [
    listMixins
  ],
  components: {
    TitleBar,
    ProductTools
  },
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    },
    title: {
      type: String,
      default: ''
    },
    columns: {
      type: Number,
      default: 1
    },
    lines: {
      type: Number,
      default: 0
    },
    size: {
      validator (value) {
        return oneOf(value, ['small', 'default'])
      },
      default: 'default'
    }
  },
  data () {
    return {
      productList: []
    }
  },
  computed: {
    span () {
      return 24 / this.columns
    },
    itemClass () {
      return {
        'small': this.size === 'small'
      }
    }
  },
  watch: {
    data (newVal) {
      this.productList = this.sliceData(newVal)
    }
  },
  methods: {
    onClick (type) {
      console.log(type)
    }
  }
}
</script>
<style src="./products.less" lang="less" scoped></style>

<template>
  <div class="products">
    <Row :gutter="5" class="product-list">
      <Col class="product-item" :span="span" v-for="(goods, index) in productList" :key="index">
      <Card :bordered="false">
        <div class="product-container" @click.stop="select(goods)">
          <div class="cover mb10"><img v-lazy="goods.img" alt=""></div>
          <div class="name mb5">{{ goods.name }}</div>
          <div class="price">¥{{ goods.price | decimal }}</div>
          <ProductTools :goods="goods"></ProductTools>
        </div>
      </Card>
      </Col>
    </Row>
  </div>
</template>
<script>
import ProductTools from '_c/product-tools'
import { oneOf } from 'common/js/utils'
import listMixins from '@/mixins/list'

export default {
  mixins: [
    listMixins
  ],
  components: {
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
    select (goods) {
      this.$emit('select', goods)
    }
  }
}
</script>
<style src="./products.less" lang="less" scoped></style>

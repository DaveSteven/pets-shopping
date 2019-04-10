<template>
  <Row :gutter="5" class="blog-list-wrapper">
    <Col class="mb5" :span="span" v-for="(item, index) in blogList" :key="index">
      <Card :bordered="false">
        <div class="blog-item" :class="itemClass">
          <div class="cover mb5">
            <img :src="item.img" alt="">
          </div>
          <div class="content">
            <span class="datetime">{{ item.time | getRelativeTime }}</span>
            <h3 class="title">{{ item.title }}</h3>
            <p class="info">
              <span>作者：<i class="text-primary text-hover-underline">{{ item.user_name }}</i></span>
              <span class="ml5 mr5 text-gray">|</span>
              <span>评论数：<i class="text-primary text-hover-underline">{{ item.comments }}</i></span>
            </p>
            <p class="text" v-html="item.content"></p>
          </div>
        </div>
      </Card>
    </Col>
  </Row>
</template>
<script>
import { oneOf } from 'common/js/utils'
import listMixins from '@/mixins/list'

export default {
  mixins: [
    listMixins
  ],
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
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
    data (val) {
      this.blogList = this.sliceData(val)
    }
  },
  data () {
    return {
      blogList: []
    }
  }
}
</script>
<style src="./blog-articles.less" lang="less" scoped></style>

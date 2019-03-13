<template>
  <Row :gutter="5" class="blog">
    <Col :span="span" v-for="(item, index) in blogList" :key="index">
      <Card :bordered="false">
        <div class="blog-item" :class="itemClass">
          <div class="cover" :style="{'background-image': `url(${item.cover})`}"></div>
          <div class="content">
            <span class="datetime">{{ item.time }}</span>
            <h3 class="title">{{ item.title }}</h3>
            <p class="info">
              <span class="mr15">作者：{{ item.user_name }}</span>
              <span>评论数：{{ item.comments }}</span>
            </p>
            <p class="text">{{ item.content }}</p>
          </div>
        </div>
      </Card>
    </Col>
  </Row>
</template>
<script>
import { oneOf } from 'common/js/utils'

export default {
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
    showNumber: {
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
    data () {
      this.sliceData()
    }
  },
  data () {
    return {
      blogList: []
    }
  },
  methods: {
    sliceData () {
      if (this.showNumber === 0) {
        this.blogList = this.data
      } else {
        this.blogList = this.data.slice(0, this.showNumber)
      }
    }
  }
}
</script>
<style src="./blogs.less" lang="less" scoped></style>

<template>
  <Row :gutter="5" class="comment-list-wrapper">
    <Col class="mt5" :span="span" v-for="(item, index) in list" :key="index">
      <Card :bordered="true">
        <div class="comment-item" :class="itemClass">
          <div class="content">
            <Card :bordered="true" class="mb5">
              <p class="comment" v-html="item.content"></p>
            </Card>
            <p class="info text-right">
              <span class="mr15">作者：{{ item.userName }}</span>
              <span class="datetime">时间：{{ item.time | getRelativeTime }}</span>
            </p>
          </div>
        </div>
      </Card>
    </Col>
  </Row>
</template>
<script>
import { oneOf } from 'common/js/utils'
import listMixins from '@/mixins/list'
import { getUserById } from '@/api/user'

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
      this.data = val
      this.getList()
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      this.data.forEach(element => {
        getUserById(element.user_id).then(res => {
          setTimeout(() => {
            element.userName = res.data.name
            this.list.push(element)
          }, 200)
        })
      })
    },
    getUserName (id) {
      getUserById(id).then(res => {
        return res.data.name
      })
    }
  },
  data () {
    return {
      list: [],
      userName: ''
    }
  }
}
</script>
<style src="./comment-form.less" lang="less" scoped></style>

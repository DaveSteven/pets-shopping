<template>
  <div class="search-wrapper">
    <div class="search-box" style="width: 510px">
      <Input search class="search-input" type="text" size="large" v-model="searchValue" @on-search="search">
        <Select slot="prepend" v-model="type" style="width: 80px">
          <Option v-for="item in options" :value="item.value" :label="item.label" :key="item.value"></Option>
        </Select>
      </Input>
    </div>
  </div>
</template>
<script>
import { Select, Option, Input } from 'iview'
import EventHub from '@/libs/eventHub'

export default {
  data () {
    return {
      type: '0',
      options: [
        {
          value: '0',
          label: '全部'
        },
        {
          value: '1',
          label: '宠物'
        },
        {
          value: '2',
          label: '用品'
        }
      ],
      searchValue: ''
    }
  },
  components: {
    Select,
    Option,
    Input
  },
  methods: {
    search () {
      this.$emit('search')
      EventHub.$emit('search', this.type, this.searchValue)
    }
  }
}
</script>
<style src="./search.less" lang="less" scoped></style>

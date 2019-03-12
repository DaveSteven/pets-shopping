<template>
  <div class="search-wrapper">
    <Select v-model="type">
      <Option v-for="item in options" :value="item.value" :label="item.label" :key="item.value"></Option>
    </Select>
  </div>
</template>
<script>
import Select from '_c/select'
import Option from '_c/select/option'

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
      ]
    }
  },
  components: {
    Select,
    Option
  }
}
</script>
<style src="./search.less" lang="less" scoped></style>

<template>
  <div class="search-wrapper">
    <Select v-model="type" style="width: 80px">
      <Option v-for="item in options" :value="item.value" :label="item.label" :key="item.value"></Option>
    </Select>
    <div class="search-box" style="width: 510px">
      <input class="search-input" type="text">
      <Icon type="search" :size="24" color="#3b3b3d"></Icon>
    </div>
  </div>
</template>
<script>
import Select from '_b/select'
import Option from '_b/select/option'

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

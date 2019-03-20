<template>
  <div class="search-wrapper">
    <div class="search-box" style="width: 510px">
      <Input search class="search-input" type="text" size="large">
        <Select slot="prepend" v-model="type" style="width: 80px">
          <Option v-for="item in options" :value="item.value" :label="item.label" :key="item.value"></Option>
        </Select>
      </Input>
      <!--<Icon type="search" :size="24" color="#3b3b3d"></Icon>-->
    </div>
  </div>
</template>
<script>
import { Select, Option, Input } from 'iview'

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
    Option,
    Input
  }
}
</script>
<style src="./search.less" lang="less" scoped></style>

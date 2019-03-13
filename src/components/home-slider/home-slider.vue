<template>
  <div class="home-slider">
    <Slider>
      <div v-for="item in data" :key="item.id">
        <img :src="item.picUrl">
      </div>
    </Slider>
  </div>
</template>
<script>
import Slider from '_b/slider'

export default {
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    Slider
  }
}
</script>
<style src="./home-slider.less" lang="less" scoped></style>

<template>
  <div class="cart-control">
    <span class="opt-btn" :class="{disabled: isOnlyOne}" @click="decrease">&#45;</span>
    <span class="count">
      <Input v-model.number="count" @on-blur="countOnChange" />
    </span>
    <span class="opt-btn" :class="{disabled: isMaxCount}" @click="add">&#43;</span>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import { Input } from 'iview'

export default {
  components: {
    Input
  },
  props: {
    good: {
      type: Object
    }
  },
  data () {
    return {
      count: this.good.count
    }
  },
  watch: {
    'good.count' (val) {
      this.count = val
    }
  },
  computed: {
    isOnlyOne () {
      return this.count === 1
    },
    isMaxCount () {
      return this.count >= 99
    }
  },
  methods: {
    add () {
      if (this.isMaxCount) {
        return
      }
      this.addCart({
        good: this.good
      })
    },
    decrease () {
      if (this.isOnlyOne) {
        return
      }
      this.decreaseCart({
        good: this.good
      })
    },
    countOnChange () {
      if (!this.count) {
        return
      }
      if (this.isMaxCount) {
        this.count = 99
      }
      this.setGoodCount({
        good: this.good,
        count: this.count
      })
    },
    ...mapActions([
      'addCart',
      'decreaseCart',
      'setGoodCount'
    ])
  }
}
</script>
<style src="./cart-control.less" lang="less" scoped></style>

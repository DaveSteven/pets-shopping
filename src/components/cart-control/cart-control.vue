<template>
  <div class="cart-control">
    <span class="opt-btn" :class="{disabled: isOnlyOne}" @click="decrease">&#45;</span>
    <span class="count">{{ good.count }}</span>
    <span class="opt-btn" @click="add">&#43;</span>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    good: {
      type: Object
    }
  },
  computed: {
    isOnlyOne () {
      return this.good.count === 1
    }
  },
  methods: {
    add () {
      this._add(this.good)
    },
    decrease () {
      if (this.isOnlyOne) {
        return
      }
      this._decrease(this.good)
    },
    ...mapMutations({
      '_add': 'ADD_GOOD_COUNT',
      '_decrease': 'DECREASE_GOOD_COUNT'
    })
  }
}
</script>
<style src="./cart-control.less" lang="less" scoped></style>

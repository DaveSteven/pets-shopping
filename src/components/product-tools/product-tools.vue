<template>
  <div class="product-tools">
    <span class="tools-item" @click.stop.prevent="addCart">
      <Icon type="basket" />
    </span>
  <span class="tools-item">
      <Icon type="preview" />
    </span>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: {
    goods: {
      type: Object
    }
  },
  computed: {
    ...mapGetters({
      'cartList': 'cart.list'
    })
  },
  methods: {
    addCart (event) {
      this._addCart({
        goods: this.goods
      })
      this.$emit('add', event.target)
    },
    ...mapActions({
      '_addCart': 'addCart'
    })
  }
}
</script>
<style src="./product-tools.less" lang="less" scoped></style>

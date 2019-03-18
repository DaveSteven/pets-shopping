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
import { mapMutations, mapGetters } from 'vuex'

export default {
  props: {
    goods: {
      type: Object
    }
  },
  computed: {
    ...mapGetters([
      'cartList'
    ])
  },
  methods: {
    addCart (event) {
      // const index = this._findIndex(this.cartList, this.goods)
      // if (index > 0) {
      //   const count = this.cartList[index].count;
      //   if (count === 1) {
      //
      //   }
      // }
      this.saveCartList(this.goods)
      this.$emit('add', event.target)
    },
    _findIndex (list, goods) {
      return list.findIndex(item => {
        return item.id === goods.id
      })
    },
    ...mapMutations({
      saveCartList: 'SET_CART_LIST'
    })
  }
}
</script>
<style src="./product-tools.less" lang="less" scoped></style>

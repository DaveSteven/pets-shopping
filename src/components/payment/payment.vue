<template>
  <div class="payment">
    <RadioGroup v-model="payment" size="large" @on-change="select" vertical>
      <Radio label="0" disabled>
        <Icon svg type="alipay-small" :size="50" color="#00a9ec"></Icon>
        <span>支付宝支付</span>
      </Radio>
      <Radio label="1" disabled>
        <Icon svg type="wechat-pay-small" :size="50" color="#32b140"></Icon>
        <span>微信支付</span>
      </Radio>
      <Radio label="2" disabled>
        <Icon svg type="union-pay-small" :size="50" color="#0060a2"></Icon>
        <span>银联支付</span>
      </Radio>
      <Radio label="4">
        <Icon svg type="cash-small" :size="50" color="#0060a2"></Icon>
        <span class="f18">货到付款</span>
      </Radio>
    </RadioGroup>
  </div>
</template>
<script>
import { RadioGroup, Radio } from 'iview'

export default {
  components: {
    RadioGroup,
    Radio
  },
  data () {
    return {
      payment: '4'
    }
  },
  created () {
    this.$emit('select', this.payment)
  },
  methods: {
    select () {
      this.$emit('select', this.payment)
    }
  }
}
</script>
<style src="./payment.less" lang="less" scoped></style>

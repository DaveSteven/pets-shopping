<template>
  <div class="checkout-wrapper">
    <TitleBar title="选择配送地址" class="mb5" :show-button="false"></TitleBar>
    <Card :bordered="false" class="mb20">
      <div class="p30">
        <transition name="fade" mode="out-in">
          <div v-if="!isSelectedAddress" key="select">
            <h1 class="title">已添加的地址</h1>
            <AddressList class="mb40" @select="addressSelect"></AddressList>
            <h1 class="title">添加新地址</h1>
            <div style="width: 500px">
              <AddressForm ref="addressForm" @submit="getNewAddress"></AddressForm>
              <div class="text-right">
                <Button type="primary" ghost @click="confirmAddress">送货到该地址</Button>
              </div>
            </div>
          </div>
          <div v-else key="selected">
            <div>
              <span class="mr5">配送至：{{ selectedAddress.name }}</span>
              <span class="mr5">{{ selectedAddress.province }}</span>
              <span class="mr5">{{ selectedAddress.city }}</span>
              <span class="mr5">{{ selectedAddress.region }}</span>
              <span class="mr5">{{ selectedAddress.address }}</span>
              <span class="mr10">{{ selectedAddress.code }}</span>
              <a href="javascript:;" class="text-primary" @click="resetSelect">重新选择</a>
            </div>
          </div>
        </transition>
      </div>
    </Card>
    <TitleBar title="选择支付方式" class="mb5" :show-button="false"></TitleBar>
    <Card>
      <div class="p30">
        <Payment @select="paymentSelect"></Payment>
        <div class="text-right"><Button type="primary" @click="submitOrder">提交订单</Button></div>
      </div>
    </Card>
  </div>
</template>
<script>
import TitleBar from '_c/title-bar'
import AddressList from '_c/address-list'
import AddressForm from '_c/address-form'
import Payment from '_c/payment'
import { mapGetters } from 'vuex'
import { saveAddress, getAddress } from 'common/js/catch'
import { Message } from 'iview'
import { addOrder } from '@/api/order'

export default {
  components: {
    TitleBar,
    AddressList,
    AddressForm,
    Payment
  },
  data () {
    return {
      addressId: '',
      selectedAddress: {}
    }
  },
  computed: {
    isSelectedAddress () {
      return Object.keys(this.selectedAddress).length > 0
    },
    ...mapGetters([
      'user',
      'cart'
    ])
  },
  created () {
    this.selectedAddress = getAddress()
  },
  methods: {
    confirmAddress () {
      this.$refs.addressForm.submit()
    },
    getNewAddress (data) {
      this._setAddress(data)
    },
    addressSelect (data) {
      this._setAddress(data)
    },
    resetSelect () {
      this._setAddress({})
    },
    paymentSelect (payment) {
      this.payment = payment
    },
    submitOrder () {
      if (!this.isSelectedAddress) {
        Message.error({
          content: 'oops...你忘记选择配送地址啦！',
          duration: 3
        })
        return
      }
      const order = {
        data: this.cart.list
      }
      console.log(order)
      addOrder({
        lists: JSON.stringify(order),
        userId: this.user.id
      }).then(res => {
        Message.success('下单成功！')
        console.log(res)
      })
    },
    _setAddress (data) {
      this.selectedAddress = data
      saveAddress(data)
    }
  }
}
</script>
<style src="./checkout.less" lang="less" scoped></style>

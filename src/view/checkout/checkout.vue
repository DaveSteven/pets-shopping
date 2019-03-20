<template>
  <div class="checkout-wrapper">
    <TitleBar title="选择配送地址" class="mb5" :show-button="false"></TitleBar>
    <Card :bordered="false">
      <div class="p30">
        <h1 class="title">已添加的地址</h1>
        <AddressList class="mb40"></AddressList>
        <h1 class="title">添加新地址</h1>
        <div style="width: 500px">
          <AddressForm ref="addressForm" @submit="getNewAddress"></AddressForm>
          <div class="text-right">
            <Button type="primary" ghost @click="confirmAddress">送货到该地址</Button>
          </div>
        </div>
      </div>
    </Card>
  </div>
</template>
<script>
import TitleBar from '_c/title-bar'
import AddressList from '_c/address-list'
import AddressForm from '_c/address-form'

export default {
  components: {
    TitleBar,
    AddressList,
    AddressForm
  },
  data () {
    return {
      addressId: ''
    }
  },
  methods: {
    confirmAddress () {
      this.$refs.addressForm.submit()
    },
    getNewAddress (data) {
      console.log(data)
    }
  }
}
</script>
<style src="./checkout.less" lang="less" scoped></style>

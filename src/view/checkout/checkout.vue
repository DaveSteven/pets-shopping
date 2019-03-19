<template>
  <div class="checkout-wrapper">
    <TitleBar title="选择收货地址" class="mb5" :show-button="false"></TitleBar>
    <Card :bordered="false">
      <div class="address-list">
        <RadioGroup vertical v-model="addressId">
          <Radio v-for="(item, index) in user.address" :key="index" :label="item.id">
            <div class="text">
              <span class="mr5">{{ item.province }}</span>
              <span class="mr5">{{ item.city }}</span>
              <span class="mr5">{{ item.region }}</span>
              <span>{{ item.address }}</span>
            </div>
          </Radio>
        </RadioGroup>
      </div>
    </Card>
  </div>
</template>
<script>
import TitleBar from '_c/title-bar'
import { RadioGroup, Radio } from 'iview'
import { mapGetters } from 'vuex'

export default {
  components: {
    TitleBar,
    RadioGroup,
    Radio
  },
  computed: {
    ...mapGetters([
      'user'
    ])
  },
  data () {
    return {
      addressId: ''
    }
  }
}
</script>
<style src="./checkout.less" lang="less" scoped></style>

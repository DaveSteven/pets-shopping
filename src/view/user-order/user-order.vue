<template>
  <div>
    <Card :bordered="false">
      <div v-if="orderList.length">
        <OrderList :data="orderList" />
      </div>
      <div class="p10 f14" v-else>暂无订单哦～</div>
    </Card>
  </div>
</template>
<script>
import OrderList from '_c/order-list'
// 相关请求
import { getOrderList } from '@/api/user'
export default {
  components: {
    OrderList
  },
  data () {
    return {
      orderList: []
    }
  },
  created () {
    this.getOrderList()
  },
  methods: {
    getOrderList () {
      getOrderList().then(res => {
        this.orderList = res.data
      })
    }
  }
}
</script>

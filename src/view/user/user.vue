<template>
  <div class="user-wrapper">
    <div class="user-side-menu">
      <TitleBar class="mb5" :show-button="false" title="用户导航" />
      <Menu theme="light">
        <MenuGroup title="订单中心">
          <MenuItem name="1">
            <Icon type="md-document" />
            我的订单
          </MenuItem>
        </MenuGroup>
        <MenuGroup title="设置">
          <MenuItem name="3">
            <Icon type="md-heart" />
            个人信息
          </MenuItem>
          <MenuItem name="4">
            <Icon type="md-leaf" />
            用户头像
          </MenuItem>
        </MenuGroup>
      </Menu>
    </div>
    <div class="user-panel">
      <TitleBar class="mb5" :show-button="false" title="我的订单"/>
      <Card :bordered="false">
        <div v-if="orderList.length">
          <OrderList :data="orderList"></OrderList>
        </div>
        <div class="p10 f14" v-else>暂无订单哦～</div>
      </Card>
    </div>
  </div>
</template>
<script>
import TitleBar from '_c/title-bar'
import OrderList from '_c/order-list'
import { Menu, MenuGroup, MenuItem } from 'iview'
import { mapGetters } from 'vuex'

// 相关请求
import { getOrderList } from '@/api/user'

export default {
  components: {
    TitleBar,
    Menu,
    MenuGroup,
    MenuItem,
    OrderList
  },
  computed: {
    ...mapGetters([
      'user'
    ])
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
      getOrderList({
        userId: this.user.id
      }).then(res => {
        this.orderList = res.data
      })
    }
  }
}
</script>
<style src="./user.less" lang="less" scoped></style>

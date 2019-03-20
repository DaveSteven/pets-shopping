<template>
  <div class="address-list">
    <Row :gutter="30">
      <Col span="8" class="item" v-for="(item, index) in user.address" :key="index">
        <p>
          <span class="text-bold">{{ item.receiver }}</span>
        </p>
        <p>
          <span class="mr5">{{ item.province }}</span>
          <span class="mr5">{{ item.city }}</span>
          <span>{{ item.region }}</span>
        </p>
        <p>{{ item.address }}</p>
        <p>{{ item.code }}</p>
        <p class="mb20">电话：{{ item.phone }}</p>
        <p class="mb10"><Button type="primary" long ghost>送货到该地址</Button></p>
        <Row :gutter="20">
          <Col span="12">
            <Button size="small" long>编辑</Button>
          </Col>
          <Col span="12">
            <Button size="small" long>删除</Button>
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'user'
    ])
  }
}
</script>
<style src="./address-list.less" lang="less" scoped></style>

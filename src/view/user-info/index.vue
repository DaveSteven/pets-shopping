<template>
  <div class="user_info">
    <Form :model="user">
      <p>用户名</p>
      <FormItem prop="name">
        <Input v-model="user.name" placeholder="用户名" disabled/>
      </FormItem>
      <p>密码</p>
      <FormItem prop="password">
        <Input v-model="user.password" type="text" placeholder="密码" />
      </FormItem>
      <p>手机号</p>
      <FormItem prop="phoneNumber" >
        <Input v-model="user.phoneNumber" placeholder="手机号" />
      </FormItem>
    </Form>
    <Button type="primary" class="mr10" size="large" @click="handleModify">确认修改</Button>
  </div>
</template>
<script>
// 相关请求
import { getUserInfo, modifyUserInfo } from '@/api/user'
import { Form, FormItem, Input, Message } from 'iview'
export default {
  components: {
    Form,
    FormItem,
    Input
  },
  data () {
    return {
      user: {
        name: '',
        password: '',
        phoneNumber: ''
      }
    }
  },
  created () {
    this.getUser()
  },
  methods: {
    getUser () {
      getUserInfo().then(res => {
        this.user = res.data
      })
    },
    handleModify () {
      modifyUserInfo(this.user).then(res => {
        Message.success('修改成功')
        this.getUser()
      })
    }
  }
}
</script>
<style src="common/fonts/title-font/title-font.css" scoped></style>
<style src="./user-info.less" lang="less" scoped></style>

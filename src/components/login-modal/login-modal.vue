<template>
  <Modal v-model="visible" :footer-hide="true" :closable="false" :mask-closable="false" @on-cancel="close">
    <div class="login-body">
      <span class="modal-close-btn" @click="close"><Icon type="close"></Icon></span>
      <div class="login-panel">
        <Logo></Logo>
        <h2 class="title small-pure-font mb20">您好～欢迎来到<span class="text-primary">萌宠家园</span>。</h2>
        <Form :model="loginForm">
          <FormItem prop="name">
            <Input v-model="loginForm.name" placeholder="用户名" />
          </FormItem>
          <FormItem prop="password">
            <Input v-model="loginForm.password" type="password" placeholder="密码" />
          </FormItem>
          <FormItem prop="phoneNumber" v-if="!isLogin">
            <Input v-model="loginForm.phoneNumber" placeholder="手机号" />
          </FormItem>
        </Form>
        <div class="mb15"><Checkbox>记住我</Checkbox></div>
        <div class="mb15">
          <Button v-if="isLogin" type="primary" class="mr10" size="large" @click="handleLogin">登录</Button>
          <Button v-if="!isLogin" type="primary" class="mr10" size="large" @click="handleRegister">立即注册</Button>
          <Button type="default" size="large" @click="close">取消</Button>
        </div>
        <p><a href="#" class="text-gray f14">忘记密码？</a></p>
      </div>
    </div>
  </Modal>
</template>
<script>
import { Form, FormItem, Input, Checkbox, Modal, Message } from 'iview'
import { mapMutations, mapGetters, mapActions } from 'vuex'
import Logo from '_c/logo'

// 接口
import { login, register } from '@/api/user'

export default {
  components: {
    Form,
    FormItem,
    Input,
    Checkbox,
    Modal,
    Logo
  },
  computed: {
    ...mapGetters([
      'loginVisible',
      'loginAction'
    ]),
    isLogin () {
      return this.loginAction === 'login'
    }
  },
  data () {
    return {
      visible: this.loginVisible,
      loginForm: {
        name: '',
        password: ''
      }
    }
  },
  watch: {
    loginVisible (val) {
      this.visible = val
    }
  },
  methods: {
    close () {
      this.setLoginVisible(false)
    },
    handleLogin () {
      login({
        ...this.loginForm
      }).then(() => {
        this.setLoginVisible(false)
        this.getUserInformation()
      })
    },
    handleRegister () {
      register({
        ...this.loginForm
      }).then(() => {
        this.setLoginVisible(false)
        Message.success('注册成功')
      })
    },
    ...mapMutations({
      'setLoginVisible': 'SET_LOGIN_VISIBLE',
      'setLoginAction': 'SET_LOGIN_ACTION'
    }),
    ...mapActions([
      'getUserInformation'
    ])
  }
}
</script>
<style src="common/fonts/title-font/title-font.css" scoped></style>
<style src="./login-modal.less" lang="less" scoped></style>

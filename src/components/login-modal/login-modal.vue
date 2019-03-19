<template>
  <Modal v-model="visible" :footer-hide="true" :closable="false" @on-cancel="close">
    <div class="login-body">
      <span class="modal-close-btn" @click="close"><Icon type="close"></Icon></span>
      <div class="login-panel">
        <Logo></Logo>
        <h2 class="title small-pure-font mb20">您好～欢迎来到<span class="text-primary">萌宠家园</span>。</h2>
        <Form>
          <FormItem>
            <Input placeholder="手机号" />
          </FormItem>
          <FormItem>
            <Input placeholder="密码" />
          </FormItem>
        </Form>
        <div class="mb15"><Checkbox>记住我</Checkbox></div>
        <div class="mb15">
          <Button type="primary" class="mr10" size="large">登录</Button>
          <Button type="default" size="large" @click="close">取消</Button>
        </div>
        <p><a href="#" class="text-gray f14">忘记密码？</a></p>
      </div>
    </div>
  </Modal>
</template>
<script>
import { Form, FormItem, Input, Checkbox, Modal } from 'iview'
import { mapMutations, mapGetters } from 'vuex'
import Logo from '_c/logo'

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
      'loginVisible'
    ])
  },
  data () {
    return {
      visible: this.loginVisible
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
    ...mapMutations({
      'setLoginVisible': 'SET_LOGIN_VISIBLE'
    })
  }
}
</script>
<style src="common/fonts/title-font/title-font.css" scoped></style>
<style src="./login-modal.less" lang="less" scoped></style>

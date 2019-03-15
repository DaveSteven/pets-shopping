<template>
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
      <Button type="default" size="large">返回</Button>
    </div>
    <p><a href="#" class="text-gray f14">忘记密码？</a></p>
  </div>
</template>
<script>
import { Form, FormItem, Input, Checkbox } from 'iview'
import Logo from '_c/logo'

export default {
  components: {
    Form,
    FormItem,
    Input,
    Checkbox,
    Logo
  }
}
</script>
<style src="common/fonts/title-font/title-font.css" scoped></style>
<style src="./login.less" lang="less" scoped></style>

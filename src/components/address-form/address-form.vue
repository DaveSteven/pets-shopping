<template>
  <div class="address-form">
    <Form ref="addressForm" :rules="formValidate" :model="address" label-position="top">
      <FormItem label="姓名" prop="name">
        <Input v-model="address.name" placeholder="请输入真实姓名" />
      </FormItem>
      <FormItem label="地区" prop="area">
        <alSelector v-model="address.area" level="2" data-type="name" />
      </FormItem>
      <FormItem label="街道地址" prop="street">
        <Input v-model="address.street" placeholder="请输入街道地址" />
      </FormItem>
      <FormItem label="邮政编码" prop="code">
        <Input v-model="address.code" placeholder="请输入邮政编码" />
      </FormItem>
      <FormItem label="联系电话" prop="phone">
        <Input v-model="address.phone" placeholder="请输入联系电话" />
      </FormItem>
    </Form>
  </div>
</template>
<script>
import { Form, FormItem, Input } from 'iview'
import { phoneValidate } from 'common/js/validation'
import iviewArea from 'iview-area'

export default {
  components: {
    Form,
    FormItem,
    Input,
    alSelector: iviewArea.alSelector
  },
  data () {
    const areaValidate = (rules, value, callback) => {
      if (!value.length) {
        callback(new Error('请选择地区'))
      } else if (value.length !== 3) {
        callback(new Error('请完善地区'))
      } else {
        callback()
      }
    }
    const phoneValidator = (rules, value, callback) => {
      if (!phoneValidate(value)) {
        callback(new Error('手机号格式不正确，请重新输入'))
      } else {
        callback()
      }
    }
    return {
      address: {
        name: '',
        area: [],
        street: '',
        code: '',
        phone: ''
      },
      formValidate: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        area: [
          { required: true, validator: areaValidate, trigger: 'change' }
        ],
        street: [
          { required: true, message: '请选择街道地址', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入邮政编码', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入联系电话', trigger: 'blur' },
          { validator: phoneValidator, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submit () {
      this.$refs.addressForm.validate(valid => {
        if (valid) {
          this.$emit('submit', this.address)
        }
      })
    }
  }
}
</script>
<style src="./address-form.less" lang="less" scoped></style>

<template>
  <div class="blog-form">
    <Form ref="blogForm" :model="form" :rules="formValidate" label-position="top">
      <FormItem label="标题" prop="title">
        <Input v-model="form.title" />
      </FormItem>
      <FormItem label="封面" prop="img">
        <ImgUpload
          v-model="form.img"
          :action="action"
          :upload-data="uploadData"
          :bucketUrl="bucketUrl"
        />
      </FormItem>
      <FormItem label="帖子内容">
        <Editor
          v-model="form.content"
          ref="editor"
          qiniu-upload
          :action="action"
          :upload-data="uploadData"
          :bucketUrl="bucketUrl"
        />
      </FormItem>
      <FormItem label="" class="text-right">
        <Button type="primary" size="large" @click="handleSubmit">发表</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
import { Form, FormItem, Input } from 'iview'
import ImgUpload from '../img-upload'
import Editor from '../editor'
import { getUpToken } from '@/api/blog'

export default {
  components: {
    Form,
    FormItem,
    Input,
    ImgUpload,
    Editor
  },
  data () {
    return {
      action: 'https://upload-z2.qiniup.com',
      bucketUrl: 'http://pp5v53szm.bkt.clouddn.com/',
      uploadData: {
        token: ''
      },
      form: {
        title: '',
        img: '',
        content: ''
      },
      formValidate: {
        title: [
          { required: true, message: '请输入文章标题', trigger: 'blur' }
        ],
        img: [
          { required: true, message: '请上传文章封面', trigger: 'change' }
        ],
        content: [
          { required: true, message: '请输入文章内容', trigger: 'change' }
        ]
      }
    }
  },
  created () {
    this.getUpToken()
  },
  methods: {
    getUpToken () {
      getUpToken().then(res => {
        this.uploadData.token = res.data
        this.$refs.editor.init()
      })
    },
    handleSubmit () {
      this.$refs.blogForm.validate(valid => {
        if (valid) {
          this.$emit('on-success-valid', {
            ...this.form
          })
        }
      })
    }
  }
}
</script>
<style src="./blog-form.less" lang="less" scoped></style>

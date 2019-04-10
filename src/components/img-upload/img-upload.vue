<template>
  <Upload
    :action="action"
    :data="uploadData"
    :on-success="success"
  >
    <Button>上传图片</Button>
  </Upload>
</template>
<script>
import { Upload } from 'iview'
import Emitter from 'iview/src/mixins/emitter'

export default {
  components: {
    Upload
  },
  mixins: [
    Emitter
  ],
  props: {
    value: {
      type: String,
      default: ''
    },
    action: {
      type: String,
      default: '',
      required: true
    },
    bucketUrl: {
      type: String,
      default: ''
    },
    uploadData: {
      type: Object
    }
  },
  methods: {
    success (response) {
      const imgUrl = `${this.bucketUrl}${response.key}`
      this.$emit('input', imgUrl)
      this.dispatch('FormItem', 'on-form-change', imgUrl)
    }
  }
}
</script>
<style src="./img-upload.less" lang="less" scoped></style>

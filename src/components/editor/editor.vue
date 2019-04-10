<template>
  <div class="editor-wrapper">
    <div :id="editorId"></div>
  </div>
</template>
<script>
import Editor from 'wangeditor'
import 'wangeditor/release/wangEditor.min.css'
import { oneOf } from 'common/js/utils'
import Emitter from 'iview/src/mixins/emitter'

export default {
  name: 'Editor',
  mixins: [
    Emitter
  ],
  props: {
    value: {
      type: String,
      default: ''
    },
    /**
       * 绑定的值的类型, enum: ['html', 'text']
       */
    valueType: {
      type: String,
      default: 'html',
      validator: (val) => {
        return oneOf(val, ['html', 'text'])
      }
    },
    /**
       * @description 设置change事件触发时间间隔
       */
    changeInterval: {
      type: Number,
      default: 200
    },
    /**
       * @description 是否开启本地存储
       */
    cache: {
      type: Boolean,
      default: true
    },
    qiniuUpload: {
      type: Boolean,
      default: false
    },
    /**
       * @uploadAction 七牛云上传地址
       */
    action: {
      type: String,
      default: ''
    },
    /**
       * @upToken 上传token
       */
    uploadData: {
      type: Object
    },
    /**
       * @bucketUrl 七牛云空间地址
       */
    bucketUrl: {
      type: String,
      default: ''
    }
  },
  watch: {
    value (val) {
      this.setHtml(val)
    }
  },
  computed: {
    editorId () {
      return `editor${this._uid}`
    }
  },
  methods: {
    setHtml (val) {
      this.editor.txt.html(val)
    },
    init () {
      this.editor = new Editor(`#${this.editorId}`)
      const qiniuUpConfig = {
        uploadImgServer: this.action,
        uploadImgParams: {
          ...this.uploadData
        },
        uploadFileName: 'file',
        uploadImgHooks: {
          customInsert: (insertImg, result) => {
            const url = `${this.bucketUrl}${result.key}`
            insertImg(url)
          }
        }
      }
      let editorConfig = {
        onchange: (html) => {
          let text = this.editor.txt.text()
          if (this.cache) localStorage.editorCache = html
          this.$emit('input', this.valueType === 'html' ? html : text)
          this.$emit('on-change', html, text)
          this.dispatch('FormItem', 'on-form-change', html, text)
        },
        onchangeTimeout: this.changeInterval
      }
      if (this.qiniuUpload) {
        editorConfig = Object.assign(editorConfig, qiniuUpConfig)
      }
      this.editor.customConfig = Object.assign(this.editor.customConfig, editorConfig)
      this.editor.create()
      // 如果本地有存储加载本地存储内容
      let html = this.value || localStorage.editorCache
      if (html) this.editor.txt.html(html)
      this.$emit('input', html)
      this.$emit('on-change', html)
      this.dispatch('FormItem', 'on-form-change', html)
    }
  },
  mounted () {
    if (!this.qiniuUpload) {
      this.init()
    }
  }
}
</script>
<style scoped></style>

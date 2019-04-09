<template>
  <div>
    <Form>
      <FormItem label="文章标题">
        <Input />
      </FormItem>
      <FormItem>
        <Upload />
      </FormItem>
    </Form>
  </div>
</template>
<script>
import { Form, FormItem, Input, Upload } from 'iview'
export default {
  components: {
    Form,
    FormItem,
    Upload,
    Input
  }
}
</script>
<style src="./blog-form.less" lang="less" scoped></style>

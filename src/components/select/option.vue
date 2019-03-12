<template>
  <li
    class="select-item"
    @click.stop="select"
    @mousedown.prevent
    @touchstart.prevent
  ><slot>{{ showLabel }}</slot></li>
</template>
<script>
import Emitter from '@/mixins/emitter'

export default {
  mixins: [ Emitter ],
  props: {
    value: {
      type: [String, Number],
      required: true
    },
    label: {
      type: [String, Number]
    }
  },
  computed: {
    showLabel () {
      return (this.label) ? this.label : this.value
    },
    optionLabel () {
      return (this.$el && this.$el.textContent) || this.label
    }
  },
  mounted () {

  },
  methods: {
    select () {
      this.dispatch('pSelect', 'on-select-selected', {
        value: this.value,
        label: this.optionLabel
      })

      this.$emit('on-select-selected', {
        value: this.value,
        label: this.optionLabel
      })
    }
  }
}
</script>
<style src="./option.less" lang="less" scoped></style>

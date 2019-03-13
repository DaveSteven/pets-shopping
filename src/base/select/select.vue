<template>
  <div
    class="select-wrapper"
    v-click-outside.capture="onClickOutside"
    v-click-outside:mousedown.capture="onClickOutside"
  >
    <div
      class="select-selection"
      @click="toggleMenu"
    >
      <span class="select-selected-value">{{ displayValue }}</span>
      <Icon type="down-arrow" :size="12" color="#bababa"></Icon>
    </div>
    <transition name="slide-fade" :appear="true">
      <div v-show="visible" class="select-drop" ref="dropdown" v-transfer-dom>
        <ul class="dropdown-list"><slot></slot></ul>
      </div>
    </transition>
  </div>
</template>
<script>
import * as vClickOutside from 'v-click-outside-x'
import TransferDom from '@/directives/transfer-dom'

const optionRegexp = /^i-option$|^Option$/

export default {
  name: 'pSelect',
  directives: { clickOutside: vClickOutside.directive, TransferDom },
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    placeholder: {
      type: String,
      default: '请选择'
    }
  },
  data () {
    return {
      visible: false,
      slotOptions: [],
      displayValue: this.placeholder
    }
  },
  mounted () {
    this.getSlotOptions()
    this.$on('on-select-selected', this.onOptionClick)
  },
  watch: {
    slotOptions () {
      this.getSelectedLabel()
    },
    value () {
      this.getSelectedLabel()
    }
  },
  methods: {
    toggleMenu () {
      this.visible = !this.visible
    },
    hideMenu () {
      this.visible = false
    },
    onClickOutside (event) {
      if (this.visible) {
        if (event.type === 'mousedown') {
          event.preventDefault()
          return
        }
        event.preventDefault()
        this.hideMenu()
      }
    },
    onOptionClick (data) {
      this.$emit('input', data.value)
      this.hideMenu()
    },
    flatOptions () {
      return extractOptions()
    },
    getSelectedLabel () {
      const selectedOption = this.slotOptions.find(item => {
        return item.value === this.value
      })
      if (Object.keys(selectedOption).length) {
        this.displayValue = selectedOption.label
      } else {
        this.displayValue = this.placeholder
      }
    },
    getSlotOptions () {
      const slotOptions = this.$slots.default
      for (let option of slotOptions) {
        const cOptions = option.componentOptions
        if (!cOptions) continue
        if (cOptions.tag.match(optionRegexp)) {
          const props = cOptions.propsData
          this.slotOptions.push(props)
        }
      }
    }
  }
}
</script>
<style src="./select.less" lang="less" scoped></style>

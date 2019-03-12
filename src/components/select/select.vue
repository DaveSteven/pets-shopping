<template>
  <div class="select-wrapper">
    <div
      class="selection"
      @click="toggleMenu"
    >
      <span class="placeholder" v-show="showPlaceholder">{{ placeholder }}</span>
      <span class="selected-value" v-show="!showPlaceholder">{{ selectedValue }}</span>
      <Icon type="down-arrow" :size="12" color="#bababa"></Icon>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    model: {
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
      selectedValue: ''
    }
  },
  computed: {
    showPlaceholder () {
      let status = false
      if (typeof this.model === 'string') {
        if (this.model === '') {
          status = true
        }
      }
      return status
    }
  },
  methods: {
    toggleMenu () {}
  }
}
</script>

export default {
  methods: {
    sliceData (list) {
      let data = []
      if (this.lines === 0) {
        data = list
      } else {
        data = list.slice(0, this.columns * this.lines)
      }
      return data
    }
  }
}

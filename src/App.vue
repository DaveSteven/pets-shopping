<template>
  <div id="app">
    <Header></Header>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from '_c/header'

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

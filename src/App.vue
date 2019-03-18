<template>
  <div id="app">
    <Header></Header>
    <div class="container">
      <router-view />
    </div>
    <Contacts class="mt50"></Contacts>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '_c/header'
import Contacts from '_c/contacts'
import Footer from '_c/footer'

export default {
  name: 'app',
  components: {
    Header,
    Contacts,
    Footer
  }
}
</script>

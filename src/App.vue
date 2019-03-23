<template>
  <div id="app">
    <Header></Header>
    <div class="container">
      <MiniNav v-if="!isHomePage"></MiniNav>
      <router-view />
    </div>
    <Contacts class="mt50"></Contacts>
    <Footer></Footer>
    <LoginModal></LoginModal>
  </div>
</template>

<script>
import Header from '_c/header'
import Contacts from '_c/contacts'
import Footer from '_c/footer'
import LoginModal from '_c/login-modal'
import MiniNav from '_c/mini-nav'

export default {
  name: 'app',
  components: {
    Header,
    Contacts,
    Footer,
    LoginModal,
    MiniNav
  },
  computed: {
    isHomePage () {
      return this.$route.path === '/'
    }
  }
}
</script>

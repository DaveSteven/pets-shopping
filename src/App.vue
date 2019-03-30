<template>
  <div id="app">
    <Header></Header>
    <div class="container">
      <keep-alive>
        <router-view />
      </keep-alive>
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

export default {
  name: 'app',
  components: {
    Header,
    Contacts,
    Footer,
    LoginModal
  }
}
</script>

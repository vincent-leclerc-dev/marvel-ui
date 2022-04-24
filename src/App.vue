<template>
  <div id="app">
    <div class="flex-grow">
      <Header :title="title" />
      <Characters />
      <Footer :copyright="copyright" />
    </div>
  </div>
</template>

<script>
import Characters from './components/Characters.vue';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Characters,
    Footer,
    Header
  },
  data() {
    return {
      title: 'MARVEL CHARACTERS',
      copyright: '&copy; ' + new Date().getFullYear() + ' Marvel'
    }
  }
}
</script>

<style>
@font-face {
  font-family: "MarvelRegular";
  src: url("../public/fonts/Marvel-Regular.ttf");
}

#app {
  background-color: #222;
}
</style>

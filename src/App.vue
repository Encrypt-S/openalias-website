<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js Test App"/> -->
    <OpenAlias/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import OpenAlias from './components/OpenAlias.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    OpenAlias
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

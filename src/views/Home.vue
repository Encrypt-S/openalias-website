<template>
  <div class="home">
    <img src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <input type="text" placeholder="enter text you want to display on the next page" v-model="text">
    <button @click="sendData(text)">Click me to push data to the other page</button>
    <hr>
    <OpenAlias />
  
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import OpenAlias from '@/components/OpenAlias.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    OpenAlias
  },
  methods: {
    sendData: function(text) {
      this.$router.push({ name: 'stepOne', params: { incomingData: text } })
    }
  },
  data: function() {
    return {
      text: ''
    }
  }
}
</script>

<template>
  <div class="home">
    <img src="../assets/logo.png">
    <!-- <HelloWorld msg="This is step one"/> -->
    <div>{{ incomingData }}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'stepOne',
  components: {
    HelloWorld
  },
    data: {
      incomingData: ''
    },
  created() {
    this.incomingData = this.$route.params.incomingData;
  }
}
</script>

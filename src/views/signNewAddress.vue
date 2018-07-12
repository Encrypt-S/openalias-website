<template>
  <div class="home">
    <h1>Confirm you are owner of this address</h1>
    <h2>Copy this address to the NavCoin console</h2>
    <Copybox>signmessage {{address}} {{alias}}@nav.community</Copybox>
    <div>Your address is: {{ address }}</div>
    <div>Your alias is: {{ alias }}@nav.community</div>
    <div>Alias current address is: {{aliasCurrentAddress}}</div>
    <router-link to="/verify-new-address"><button>Next</button></router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";
import Copybox from '../components/Copybox'

export default {
  name: "signNewAddress",
  computed: {
    ...mapState({
      address: state => state.address,
      alias: state => state.alias,
      aliasCurrentAddress: state => state.aliasCurrentAddress
    })
  },
  components: {
    Copybox,
  }
};
</script>

<style scoped>

</style>

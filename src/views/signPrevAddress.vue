<template>
  <div class="home">
    <h1>Confirm you are owner of {{ alias }}@nav.community</h1>
    <h2>Copy this address to the NavCoin console</h2>
    <pre class="copytext">signmessage {{aliasCurrentAddress}} {{alias}}@nav.community</pre>
    <br />
    <div>Your address is: {{ address }}</div>
    <div>Your alias is: {{ alias }}@nav.community</div>
    <div>Alias current address is: {{aliasCurrentAddress}}</div>
    <button>Copy</button>
    <router-link to="/verify-prev-address"><button>Next</button></router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapMutations } from "vuex";

export default {
  name: "signNewAddress",
  computed: {
    ...mapState({
      address: state => state.address,
      alias: state => state.alias,
      aliasCurrentAddress: state => state.aliasCurrentAddress
    })
  },
  created() {
    this.incomingData = this.$route.params.incomingData;
  }
};
</script>

<style scoped>
.copytext {
  border: 1px solid black;
  background: lightgrey;
  font-size: 1.2em;
  padding: 5px 20px;
  display: inline-block;
}
</style>
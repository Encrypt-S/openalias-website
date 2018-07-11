<template>
  <div class="home">
    <h1>Copy message to your console</h1>
    <pre>signmessage {{address}} {{alias}}@nav.community</pre>
    <div>Your address is: {{ address }}</div>
    <div>Your alias is: {{ alias }}@nav.community</div>
    <button>Copy</button>
    <router-link to="/verify-new-address"><button>Next</button></router-link>
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
      alias: state => state.alias
    })
  },
  created() {
    this.incomingData = this.$route.params.incomingData;
  }
};
</script>

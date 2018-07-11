<template>
  <div>
    <h1>Verify your address</h1>
    <input />
    <router-link to="/create-alias"><button>Create alias</button></router-link>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "verifyNewAddress",
  computed: {
    ...mapState({
      address: state => state.address,
      alias: state => state.alias
    })
  }
};
</script>
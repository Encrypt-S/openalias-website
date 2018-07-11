<template>
  <div>
    <h1>Verifying you are the owner of {{alias}}@nav.community</h1>
    <input type="text" v-model="addressVerification"/>
    <div>
      <button @click="clickCreate(addressVerification)">Create alias</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "verifyPrevAddress",
  data: () => ({
    addressVerification: ""
  }),
  computed: {
    ...mapState({
      address: state => state.address,
      alias: state => state.alias,
      aliasCurrentAddress: state => state.aliasCurrentAddress
    })
  },
  methods: {
    ...mapMutations({
      savePrevAddressVerification: "savePrevAddressVerification"
    }),
    clickCreate: function(verification) {
      this.savePrevAddressVerification(verification);
      this.$router.push({ name: "createAlias" });
    }
  }
};
</script>
<template>
  <div>
    <h1>Success</h1>
    <p>Data that was sent</p>
    <pre>
      Address: {{address}}
      Alias: {{alias}}
      aliasCurrentAddress: {{aliasCurrentAddress}}
      addressVerification: {{addressVerification}}
      prevAddressVerification: {{prevAddressVerification}}
    </pre>
    <p>Data that was recieved</p>
    <pre>
      {{openAliasResponse && JSON.stringify(openAliasResponse)}}
    </pre>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "createAlias",
  beforeMount: function() {
    this.createAlias()
  },
  computed: mapState([
    "address",
    "alias",
    "aliasCurrentAddress",
    "addressVerification",
    "prevAddressVerification",
    "openAliasResponse"
  ]),
  methods: {
    ...mapActions({
      createAlias: "createAlias"
    })
  }
};
</script>
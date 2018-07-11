<template>
  <div class="hello">
    <p>
      Look I'm rendering things
    </p>
    <input @input="checkAddress" type="text" v-model="address">
    <input @input="checkAlias" type="text" v-model="alias">
    <h1 v-if="address && alias">{{ address }} -> {{alias}}@nav.community</h1>
    {{error}}
    <button @click="saveAddress({address, alias })">Update</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'OpenAlias',
  data: () => ({
    address: '',
    alias: '',
    error: '',
  }),
  computed: mapState({
    newAddress: state => state.address
  }),
  methods: {
    ...mapMutations({
      saveAlias: 'saveAlias',
    }),
    checkAddress: function() {
      if (this.address.length < 25) {
        this.error = 'Address too short'
      } else
        this.error = ''
    },
    checkAlias: function() {
      if (this.alias.length < 2) {
        this.error = 'Alias too short'
      } else
        this.error = ''
    },
    saveAddress: function(payload) {
      this.saveAlias(payload)
      this.$router.push({ name: "signNewAddress" });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<template>
  <div class="hello">
    <p>
      Look I'm rendering things
    </p>
    <input @input="checkAddress" type="text" v-model="msg">
    <h1>{{ msg }}</h1>
    <p>{{ error }}</p>
    <p>{{ address }}</p>
    <button @click="saveAddress(msg)">Update</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'

export default {
  name: 'OpenAlias',
  data: () => ({
    msg: '',
    error: ''
  }),
  computed: mapState({
    address: state => state.address
  }),
  methods: {
    ...mapMutations({
      saveAddress: 'updateAddress',
    }),
    checkAddress: function() {
      if (this.msg.length < 25) {
        this.error = 'Address too short'
      } else
        this.error = ''
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

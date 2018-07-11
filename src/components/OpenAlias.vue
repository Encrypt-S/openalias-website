<template>
  <div class="hello">
    <p>
      Look I'm rendering things
    </p>
    <input  @input="checkAddress" type="text" v-model="msg">
    <h1>{{ msg }}</h1>
    <p>{{ error }}</p>
  </div>
</template>

<script>
export default {
  name: 'OpenAlias',
  props: {
    msg: String,
    error: String
  },
  methods: {
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

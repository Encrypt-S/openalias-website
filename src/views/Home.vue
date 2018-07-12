<template>
  <HomeHero>
    <h2>Give your NavCoin address a name!</h2>
    <div class="alias-menu">
      <div
        v-bind:class="{ 'active-box': !editAlias }"
        class="alias-box"
        @click="updateAliasType('create')"
      >
        Create Alias
      </div>
      <div class="middle-border"></div>
      <div class="alias-box"
        v-bind:class="{ 'active-box': editAlias }"
        @click="updateAliasType('edit')"
      >
        Update Alias
      </div>
    </div>
    <div>
      <label>
        Address
        <input @input="checkAddressValid" type="text" v-model="address">
      </label>
    </div>
    <div>
      <label>
        Alias
        <input @input="checkAliasValid" type="text" v-model="alias">
      </label>
    </div>
    <h1>From {{ address || 'NAV Address' }} -> {{alias || 'alias'}}@nav.community</h1>
    {{error}}
    <button @click="saveAddress({address, alias })">Next</button>
  </HomeHero>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import HomeHero from '../components/HomeHero'

export default {
  name: "OpenAlias",
  data: () => ({
    address: "",
    alias: "",
    error: "",
    editAlias: false,
  }),
  computed: mapState({
    newAddress: state => state.address
  }),
  methods: {
    ...mapMutations({
      saveAlias: "saveAlias"
    }),
    ...mapActions({
      checkAlias: "checkAlias"
    }),
    updateAliasType: function(type) {
      if (type === 'create') {
        this.editAlias = false
      }

      if (type === 'edit') {
        this.editAlias = true
      }
    },
    checkAddressValid: function() {
      if (this.address.length < 25) {
        this.error = "Address too short";
      } else this.error = "";
    },
    checkAliasValid: function() {
      if (this.alias.length < 2) {
        this.error = "Alias too short";
      } else this.error = "";
    },
    saveAddress: function(payload) {
      this.saveAlias(payload);
      this.checkAlias(payload.alias);
      this.$router.push({ name: "signNewAddress" });
    }
  },
  components: {
    HomeHero,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  h2 {
    color: white;
  }

  .alias-menu {
    border-bottom: 1px solid white;
    display: inline-flex;
    align-items: center;
  }

  .alias-box {
    width: 120px;
    padding: 10px;
    text-align: center;
    color: rgba(255, 255, 255, 0.7);
    cursor: pointer;
  }

  .active-box {
    border-bottom: white 3px solid;
    color: white;
  }

  .middle-border {
    height: 20px;
    width: 1px;
    background: white;
  }
</style>

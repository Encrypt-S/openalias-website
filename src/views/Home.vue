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
    <div class="inputs">
      <input class="textInput" @input="checkAddressValid" type="text" v-model="address"
        v-bind:placeholder="editAlias ? 'New NavCoin address' : 'Your NavCoin address'"
      >
      <div class="arrow">→</div>
      <div class="placeholder" data-placeholder="@community.nav">
        <input class="textInput" @input="checkAliasValid" type="text" v-model="alias"
          v-bind:placeholder="editAlias ? 'Existing Alias' : 'Create Alias'"
        >
      </div>
    </div>
    <div class="intro-text">
      <p v-if="!editAlias">
        NAV Open Alias is a little like paypal. It gives you an easy to remember and share 'email style' address that
        can be used to send you funds.
      </p>
      <p v-if="editAlias">
        If you already have an existing alias. You will need access to the wallet that created the original alias.
        Just enter your updated address and your old alias, and we will automatically confirm you are the correct owner.
      </p>
    </div>
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
    margin: 0 0 20px 0;
  }

  .inputs {
    display: flex;
    justify-content: center;
    margin: 20px 0 50px 0;
  }

  .textInput {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 1.2em;
    min-width: 350px;
    border-radius: 3px;
    padding: 10px;
    border: 0px;
    outline: none;
    box-shadow: rgba(141, 76, 191, 0.55) 0 11px 31px;
  }

  .placeholder {
    position: relative;
    display: inline-block;
  }

  .placeholder::after {
    position: absolute;
    right: 5px;
    top: 1px;
    content: attr(data-placeholder);
    pointer-events: none;
    opacity: 0.6;
  }

  .arrow {
    color: white;
    font-size: 30px;
    margin: 0 20px;
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

  .intro-text {
    max-width: 500px;
    color: white;
    margin: auto;
  }
</style>

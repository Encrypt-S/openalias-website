<template>
  <div>
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
      <TextInput v-model="address" :blurEvent="checkAddressValid">
        <template slot="label">{{editAlias ? 'New NavCoin address' : 'Your NavCoin address'}}</template>
        <template slot="errorLabel">
          <InputErrorLabel v-if="addressError" :msg="addressError" :info="addressInfo" />
        </template>
      </TextInput>


      <div class="arrow">→</div>
      <div class="emailMaskContainer">
        <span class="emailMask" v-if="alias"><span style="visibility: hidden">{{alias}}</span><span>@nav.community</span></span>
        <TextInput v-model="alias" :inputEvent="checkAliasValid">
          <template slot="label">{{editAlias ? 'Existing Alias' : 'Create Alias'}}</template>
          <template slot="errorLabel">
            <InputErrorLabel v-if="aliasError" :msg="aliasError" :info="aliasInfo" />
          </template>
        </TextInput>


      </div>
    </div>
    <div class="intro-text">
      <p v-if="!editAlias">
        NAV OpenAlias is a little like paypal. It gives you an easy to remember and share 'email style' address that
        can be used to send you funds.
      </p>
      <p v-if="editAlias">
        To update an existing alias, you will need access to the wallet that created the original alias.<br />
      </p>
    </div>
    <Button @click="saveAddress({ address, alias })" :disabled="!address || !alias || addressError || aliasError">{{!editAlias ? 'Create' : 'Update'}} your alias</Button>
  </div>
</template>

<script>
  import { mapState, mapMutations, mapActions } from "vuex";
  import TextInput from '../components/TextInput'
  import Button from '../components/Button'
  import InputErrorLabel from '../components/InputErrorLabel'

  export default {
    name: "OpenAlias",
    data: () => ({
      address: "",
      alias: "",
      aliasError: "",
      aliasInfo: "",
      addressError: "",
      addressInfo: "",
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
        if (!this.address) {
          return this.addressError = ""
        }

        // Must be 33 characters and start with an N
        if (!/[N]{1}[1-9A-HJ-NP-Za-km-z]{33}/.test(this.address)) {
          this.addressInfo = "Enter a NavCoin public key here. A NavCoin public key address is a alphanumerical string that is 34 characters long"
          return this.addressError = "Invalid NavCoin Wallet Address"
        }

        this.addressInfo = ""
        this.addressError = ""
      },
      checkAliasValid: function() {
        if (!this.alias) {
          this.aliasInfo = "";
          return this.aliasError = "";
        }

        this.aliasInfo = "Your alias is unique name for your NavCoin address. It can only contain letters, numbers and full stop."

        if (this.alias.indexOf(' ') !== -1) {
          return this.aliasError = "Address cannot contain a space."
        }

        // Match only a-z, A-Z, 0-9, and .
        if (!/^(\w|\.)+$/g.test(this.alias)) {
          return this.aliasError = "Address can only contain letters, numbers and fullstop (.)"
        }

        if (this.alias.length < 2) {
          return this.aliasError = "Must contain atleast 2 characters"
        }

        if (this.alias.length > 25) {
          return this.aliasError = "Maximum length is 25 characters"
        }

        this.aliasError = "";
      },
      saveAddress: function(payload) {
        this.saveAlias(payload);
        this.checkAlias(payload.alias);
        if (this.editAlias) {
          this.$router.push({ name: "VerifyPrevAddress" })
        } else {
          this.$router.push({ name: "VerifyNewAddress" })
        }
      }
    },
    components: {
      TextInput,
      Button,
      InputErrorLabel,
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  /* Inputs */
  .inputs {
    display: flex;
    justify-content: center;
    align-items: baseline;
    margin: 20px 0 50px 0;
  }

  @media (max-width: 870px) {
    .inputs {
      align-items: center;
    }
  }

  .inputs >>> input {
    width: 350px;
  }

  .emailMaskContainer {
    position: relative;
  }

  .emailMask {
    position: absolute;
    left: 0;
    top: 20px;
    padding-left: 20px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 1.2em;
    pointer-events: none;
    color: #757575;
  }

  .arrow {
    color: white;
    font-size: 40px;
    margin: 10px 20px;
  }

  @media all and (max-width: 870px) {
    .inputs {
      flex-direction: column;
    }

    .arrow {
      transform: rotate(90deg);
    }
  }

  /* Other */

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

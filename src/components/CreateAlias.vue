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
          <InputErrorLabel v-if="addressError ">
            <template slot="errorIcon">
              <img src="/images/d-error.svg" alt="">
            </template>
            <template slot="errorText">
              <span class="text">{{addressError}}</span>
            </template>
            <template slot="infoIcon">
              <img src="/images/d-error.svg" alt="">
            </template>
          </InputErrorLabel>
        </template>
      </TextInput>


      <div class="arrow">→</div>
      <div class="emailMaskContainer">
        <span class="emailMask" v-if="alias"><span style="visibility: hidden">{{alias}}</span><span>@nav.community</span></span>
        <TextInput v-model="alias" :inputEvent="checkAliasValid">

          <template slot="label">{{editAlias ? 'Existing Alias' : 'Create Alias'}}</template>

          <template slot="errorLabel">
            <InputErrorLabel v-if="aliasError">
              <template slot="errorIcon">
                <img src="/images/d-error.svg" alt="">
              </template>
              <template slot="errorText">
                <span class="text">{{aliasError}}</span>
              </template>
              <template slot="infoIcon">
                <img src="/images/d-error.svg" alt="">
              </template>
            </InputErrorLabel>
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
        If you wish to updated an existing alias, you will need access to the wallet that created the original alias.
        Just enter your updated address and your old alias, and we will automatically confirm you are the correct owner.
      </p>
    </div>
    <Button @click="saveAddress({ address, alias })" :disabled="!address || !alias || addressError || aliasError">Create your alias</Button>
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
      addressError: "",
      editAlias: false,
      regex: new RegExp(/[N]{1}[1-9A-HJ-NP-Za-km-z]{33}/)
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
        if (this.address) {
          if (!this.regex.test(this.address)) {
            this.addressError = "Invalid NavCoin Wallet Address"
            return
          }
        }
        this.addressError = undefined
      },
      checkAliasValid: function() {
        if (this.alias) {
          if (this.alias.indexOf(' ') !== -1) {
            this.aliasError = "Address cannot contain a space."
            return
          } else if (this.alias.length < 2) {
            this.aliasError = "Min length is 2 characters"
            return
          } else if (this.alias.length > 25) {
            this.aliasError = "Max length is 25 characters"
            return
          }
        }
          this.aliasError = undefined;
      },
      saveAddress: function(payload) {
        this.saveAlias(payload);
        this.checkAlias(payload.alias);
        this.$router.push({ name: "verifyNewAddress" })
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

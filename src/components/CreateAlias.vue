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
      <div class="input">
        <TextInput v-model="address" :blurEvent="checkAddressValid">
          <template slot="label">{{editAlias ? 'New NavCoin address' : 'Your NavCoin address'}}</template>
          <template slot="errorLabel">
            <InputErrorLabel :msg="addressError" :info="addressInfo" color="white" />
          </template>
        </TextInput>
      </div>


      <div class="arrow">
        <img src="/images/d-right-wt.svg" alt="right arrow" />
      </div>
      <div class="input">
        <div class="emailMaskContainer">
          <span class="emailMask" v-if="alias"><span style="visibility: hidden">{{alias}}</span><span>@nav.community</span></span>
          <TextInput v-model="alias" :inputEvent="checkAliasValid">
            <template slot="label">{{editAlias ? 'Existing Alias' : 'Create Alias'}}</template>
            <template slot="errorLabel">
              <InputErrorLabel :msg="aliasError" :info="aliasInfo" color="white" />
            </template>
          </TextInput>
        </div>
      </div>
    </div>
    <div class="intro-text">
      <p v-if="!editAlias">
        NAV OpenAlias is a little like PayPal, which lets you send a payment to an email address. The difference is that OpenAlias allows you to set an easy to remember ‘email style’ address to represent your full NavCoin address.
      </p>
      <p v-if="editAlias">
        To update an existing alias, you will need access to the wallet that created the original alias.<br />
      </p>
    </div>
    <Button @click="saveAddress({ address, alias })" :disabled="!address || !alias || addressError !== '' || aliasError !== ''">{{!editAlias ? 'Create' : 'Update'}} your alias</Button>
    <InputErrorLabel :msg="homePageError" color="white" />
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import InputErrorLabel from "../components/InputErrorLabel";

export default {
  name: "OpenAlias",
  data: () => ({
    alias: "",
    aliasError: "",
    aliasInfo: "",
    address: "",
    addressError: "",
    addressInfo: "",
    editAlias: false
  }),
  computed: mapState({
    newAddress: state => state.address,
    homePageError: state => state.homePageError
  }),
  methods: {
    ...mapMutations({
      saveAlias: "saveAlias"
    }),
    ...mapActions({
      checkAlias: "checkAlias",
      checkAliasNew: "checkAliasNew",
      checkAliasUpdate: "checkAliasUpdate"
    }),
    updateAliasType: function(type) {
      if (type === "create") {
        this.editAlias = false;
      }

      if (type === "edit") {
        this.editAlias = true;
      }
    },
    checkAddressValid: function() {
      if (!this.address) {
        return (this.addressError = "");
      }

      // Must be 33 characters and start with an N
      if (!/[N]{1}[1-9A-HJ-NP-Za-km-z]{33}/.test(this.address)) {
        this.addressInfo =
          "Enter a NavCoin public key here. A NavCoin public key address is a alphanumerical string that is 34 characters long";
        return (this.addressError = "Invalid NavCoin Wallet Address");
      }

      this.addressInfo = "";
      this.addressError = "";
    },
    checkAliasValid: function() {
      if (!this.alias) {
        this.aliasInfo = "";
        return (this.aliasError = "");
      }

      this.aliasInfo =
        "Your alias is unique name for your NavCoin address. It can only contain letters, numbers and full stop.";

      if (this.alias.indexOf(" ") !== -1) {
        return (this.aliasError = "Address cannot contain a space.");
      }

      // Match only a-z, A-Z, 0-9, and .
      if (!/^(\w|\.)+$/g.test(this.alias)) {
        return (this.aliasError =
          "Address can only contain letters, numbers and fullstop (.)");
      }

      if (this.alias.length < 2) {
        return (this.aliasError = "Must contain atleast 2 characters");
      }

      if (this.alias.length > 25) {
        return (this.aliasError = "Maximum length is 25 characters");
      }

      this.aliasError = "";
    },
    saveAddress: function(payload) {
      this.saveAlias(payload);
      if (this.editAlias) {
        this.checkAliasUpdate(payload.alias);
      } else {
        this.checkAliasNew(payload.alias);
      }
    }
  },
  components: {
    TextInput,
    Button,
    InputErrorLabel
  }
};
</script>

<style scoped>
/* Inputs */
.inputs {
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin: 20px 0 50px 0;
}

.input {
  width: 400px;
}

@media (max-width: 870px) {
  .inputs {
    align-items: center;
  }
  .input {
    width: 500px;
  }
}

@media (max-width:500px){
  .input{
    width: 320px;
  }
}

.emailMaskContainer {
  position: relative;
}

.emailMask {
  position: absolute;
  left: 0;
  top: 20px;
  padding-left: 20px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 1.2em;
  pointer-events: none;
  color: #757575;
}

.arrow {
    width: 25px;
    color: rgb(255, 255, 255);
    font-size: 40px;
    margin: 10px 12px;
}

@media all and (max-width: 870px) {
  .inputs {
    flex-direction: column;
  }

  .arrow {
    transform: rotate(90deg);
    margin: 0;
    font-size:40px;
  }
}

/* Other */



.alias-menu {
  border-bottom: 1px solid white;
  display: inline-flex;
  align-items: center;
}

.alias-box {
  width: 250px;
  padding: 10px;
  font-weight: 400;
  font-family: raleway;
  font-size: 22px;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
}

@media all and (max-width: 500px) {
  .alias-box{
    width: 160px;
  }
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
  line-height: 34px;
  max-width: 973px;
  color: white;
  margin: auto;
  font-size: 20px;
  font-weight: 300;
}

@media (max-width: 625px) {
  /* At this width we want to start shrinking. 80% of 625 = 500 */
  .intro-text {
    max-width: 80vw;
    font-size:18px;
    line-height:27px;
    margin-top:-2%;
    text-align: left;
  }
}
</style>

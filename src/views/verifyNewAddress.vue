<template>
  <div>
    <Hero>
      <h1>Verify your address</h1>
      <p>For detailed insturctions, see below.</p>
      <div class="input-container">
        <p>1) Copy the message below</p>
        <Copybox>signmessage {{address}} {{alias}}@nav.community</Copybox>
        <div><Button @click="copyText({ address, alias })">{{copied ? "Copied" : "Copy"}}</Button></div>

        <p>2) Open your NavCoin core wallet, </p>
        <TextInput v-model="addressVerification">
          <template slot="label">{{'enter response'}}</template>
        </TextInput>
      </div>

      <div><Button @click="clickCreate(addressVerification)">Create Alias</Button></div>
      <div>Instructions</div>
    </Hero>

    <ToggleSection buttonOneText="NavCoin Core" buttonTwoText="NavPi">
      <div slot="sectionOne">
        <InfoSection :containerStyle="infoSectionStyle">
          <template slot="title">How to open the debug window</template>
          <span slot="text" class="subtext hide"></span>
          <template slot="children">
            <DebugStep src="/images/d-console1.png">
              <span slot="title" class="title number">1</span>
              <span slot="text" class="subtext">Open your NavCoin wallet, open the console through Help&nbsp;->&nbsp;Debug Window</span>
            </DebugStep>
            <DebugStep src="/images/d-console2.png">
              <span slot="title" class="title number">2</span>
              <span slot="text" class="subtext">Paste your command, then hit Enter key on your keyboard.</span>
            </DebugStep>
            <DebugStep src="/images/d-console3.png">
              <span slot="title" class="title number">3</span>
              <span slot="text" class="subtext">Response (verification code) will be created, copy and paste it to the next step.</span>
            </DebugStep>
          </template>
        </InfoSection>

        <DownArrow text="Get an error?"/>

        <InfoSection :containerStyle="infoSectionStyle">
          <template slot="title">Make sure your wallet is unlocked</template>
          <span slot="text" class="subtext">If you’re staking your NAV or have encrypted your wallet, then the wallet will be locked. You will need to unlock your wallet to be able to register your address.</span>
          <template slot="children">
            <ListEntry>
              <span slot="number" class="number">1</span><span slot="text" class="text"> Go to the debug window.</span>
            </ListEntry>
            <ListEntry>
              <span slot="number" class="number">2</span><span slot="text" class="text"> Then unlock your wallet with ‘walletpassphrase XXX 300’. XXX is your passphrase, and 300 refers to the amount of seconds it will be unlocked for.</span>
            </ListEntry>
            <ListEntry>
              <span slot="number" class="number">3</span>  <span slot="text" class="text"> Then paste in the open alias registration command.</span>
            </ListEntry>
            <ListEntry>
              <span slot="number" class="number">4</span><span slot="text" class="text">  Type in ‘walletlock’ to lock your wallet again for staking.</span>
            </ListEntry>
          </template>
        </InfoSection>

      </div>

      <div slot="sectionTwo">

        <InfoSection :containerStyle="infoSectionStyle">
          <template slot="title">NavPi Instructions</template>
          <span slot="text" class="subtext hide"></span>
          <template slot="children">
            <DebugStep src="/images/d-console1.png">
              <span slot="title" class="title number">A</span>
              <span slot="text" class="subtext">Open your NavCoin wallet, open the console through Help&nbsp;->&nbsp;Debug Window</span>
            </DebugStep>
            <DebugStep src="/images/d-console2.png">
              <span slot="title" class="title number">B</span>
              <span slot="text" class="subtext">Paste your command, then hit Enter key on your keyboard.</span>
            </DebugStep>
            <DebugStep src="/images/d-console3.png">
              <span slot="title" class="title number">C</span>
              <span slot="text" class="subtext">Response (verification code) will be created, copy and paste it to the next step.</span>
            </DebugStep>
          </template>
        </InfoSection>

        <DownArrow text="Get an error?"/>

        <InfoSection :containerStyle="infoSectionStyle">
          <template slot="title">Make sure your wallet is unlocked</template>
          <span slot="text" class="subtext">If you’re staking your NAV or have encrypted your wallet, then the wallet will be locked. You will need to unlock your wallet to be able to register your address.</span>
          <template slot="children">
            <ListEntry>
              <span slot="number" class="number">1</span><span slot="text" class="text"> Go to the debug window.</span>
            </ListEntry>
            <ListEntry>
              <span slot="number" class="number">2</span><span slot="text" class="text"> Then unlock your wallet with ‘walletpassphrase XXX 300’. XXX is your passphrase, and 300 refers to the amount of seconds it will be unlocked for.</span>
            </ListEntry>
            <ListEntry>
              <span slot="number" class="number">3</span>  <span slot="text" class="text"> Then paste in the open alias registration command.</span>
            </ListEntry>
            <ListEntry>
              <span slot="number" class="number">4</span><span slot="text" class="text">  Type in ‘walletlock’ to lock your wallet again for staking.</span>
            </ListEntry>
          </template>
        </InfoSection>

      </div>
    </ToggleSection>

  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import InfoSection from "@/components/InfoSection.vue"
import DebugStep from "@/components/DebugStep.vue"
import DownArrow from "@/components/DownArrow.vue"
import ListEntry from "@/components/ListEntry.vue"
import ToggleSection from "@/components/ToggleSection.vue"

import Copybox from '../components/Copybox'
import Hero from '../components/Hero'
import Button from '../components/Button'
import TextInput from '../components/TextInput'


export default {
  name: "verifyNewAddress",
  components: {
    InfoSection,
    DebugStep,
    DownArrow,
    ListEntry,
    ToggleSection,
    Copybox,
    Hero,
    Button,
    TextInput
  },
  data: () => ({
    addressVerification: "",
    infoSectionStyle: { padding: '0' },
    copied: false,
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
      saveAddressVerification: "saveAddressVerification"
    }),
    clickCreate: function(verification) {
      this.saveAddressVerification(verification);
      this.$router.push({ name: "createAlias" });
    },
    copyText: function () {
      this.$copyText(`signmessage ${this.address} ${this.alias}@nav.community`).then((e) => {
        this.copied = true
        this.$toasted.show('Copied to clipboard', {
          position: 'top-center',
          theme: 'oa-toast',
          type: '',
          duration: '1000',
          className: 'oa-toast',
          action : {
            text : '✕',
            onClick : (e, toastObject) => {
              toastObject.goAway(0);
            }
          },
        })
        console.log(e)
      }, function (e) {
        alert('Can not copy')
        console.log(e)
      })
    },
  }
};
</script>

<style scoped>
  h1 {
    color: #7D59B4;
    size: 52px;
  }

  .input-container {
    max-width: 800px;
    width: calc(100vw - 100px);
    margin: auto;
    margin-bottom: 20px;
  }
</style>

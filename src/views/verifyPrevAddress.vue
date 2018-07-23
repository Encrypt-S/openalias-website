<template>
  <div>
    <Hero>
      <h1>Verify you own this alias</h1>
      <p>For detailed insturctions, see below.</p>
      <div class="input-container">
        <p>1) Copy the message below</p>
        <Copybox>signmessage {{aliasCurrentAddress}} {{alias}}@nav.community</Copybox>
        <div><Button @click="copyText()">{{copied ? "Copied" : "Copy"}}</Button></div>

        <p>2) Open your NavCoin core wallet, </p>
        <TextInput v-model="addressVerification">
          <template slot="label">{{'enter response'}}</template>
        </TextInput>
      </div>

      <div><Button @click="clickCreate(addressVerification)">Create Alias</Button></div>
      <div>Instructions</div>
    </Hero>

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
          <span slot="number" class="number">2</span><span slot="text" class="text">  Then unlock your wallet with ‘walletpassphrase XXX 300’.</span>
        </ListEntry>
        <ListEntry>
          <span slot="number" class="number">3</span><span slot="text" class="text">  XXX is your passphrase, and 300 refers to the amount of seconds it will be unlocked for.</span>
        </ListEntry>
        <ListEntry>
          <span slot="number" class="number">4</span><span slot="text" class="text">  Then paste in the open alias registration command Type in ‘walletlock’ to lock your wallet again for staking.</span>
        </ListEntry>
      </template>
    </InfoSection>
  </div>
</template>

<script>
  import { mapState, mapMutations } from "vuex";
  import InfoSection from "@/components/InfoSection.vue"
  import DebugStep from "@/components/DebugStep.vue"
  import DownArrow from "@/components/DownArrow.vue"
  import ListEntry from "@/components/ListEntry.vue"
  import Copybox from '../components/Copybox'
  import Hero from '../components/Hero'
  import Button from '../components/Button'
  import TextInput from '../components/TextInput'


  export default {
    name: "VerifyNewAddress",
    components: {
      InfoSection,
      DebugStep,
      DownArrow,
      ListEntry,
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
        savePrevAddressVerification: "savePrevAddressVerification"
      }),
      clickCreate: function(verification) {
        this.savePrevAddressVerification(verification);
        this.$router.push({ name: "VerifyNewAddress" });
      },
      copyText: function () {
        this.$copyText(`signmessage ${this.aliasCurrentAddress} ${this.alias}@nav.community`).then((e) => {
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

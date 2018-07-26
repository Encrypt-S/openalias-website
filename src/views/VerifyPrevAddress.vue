<template>
  <div>
    <Hero>
      <h1>Verify you own {{alias}}@nav.community</h1>
      <div class="input-container">
        <ListEntry><span slot="number" class="number">1</span><span slot="text" class="text small">Copy the message below</span></ListEntry>
        <Copybox>signmessage {{aliasCurrentAddress}} {{alias}}@nav.community</Copybox>
        <div><Button @click="copyText()">{{copied ? "Copied" : "Copy"}}</Button></div>

        <img src="/images/d-down.svg" alt="Down arrow" class="down-arrow-img">

        <ListEntry><span slot="number" class="number">2</span><span slot="text" class="text small">Now open your NavCoin wallet, open console through Help -> Debug and pastes the message, then hit Enter on your keyboard. An response message (verification code) will be created, copy and paste it here</span></ListEntry>
        <TextInput v-model="addressVerification" :inputEvent="verifySignature">
          <template slot="label">{{'enter response'}}</template>
          <template slot="errorLabel">
            <InputErrorLabel v-if="addressVerificationError">
              <template slot="errorIcon">
                <img src="/images/d-error.svg" alt="">
              </template>
              <template slot="errorText">
                <span class="text">{{addressVerificationError}}</span>
              </template>
              <template slot="infoIcon">
                <img src="/images/d-error.svg" alt="">
              </template>
            </InputErrorLabel>
          </template>
        </TextInput>
      </div>
      <div class="need-help">If you need help, please check instruction below ↓</div>
      <div><Button @click="clickCreate(addressVerification)">Create Alias</Button></div>
      <DownArrow text="Instructions" />
    </Hero>

    <ToggleSectionButton buttonOneText="NavCoin Core" buttonTwoText="NavPi">
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
            <DebugStep src="/images/navpi-step-1.png">
              <span slot="title" class="title number">1</span>
              <span slot="text" class="subtext">Open NavPi dashboard and click <b>Control</b> on menu</span>
            </DebugStep>
            <DebugStep src="/images/navpi-step-2.png">
              <span slot="title" class="title number">2</span>
              <span slot="text" class="subtext">Inside the control panel, click <b>All Commands</b>.</span>
            </DebugStep>
            <DebugStep src="/images/navpi-step-3.png">
              <span slot="title" class="title number">3</span>
              <span slot="text" class="subtext">Type <b>signmessage</b> in textfield A, your <b>NavCoin address</b> in textfield B and your <b>alias</b> in textfield C and click Issue Command to finish</span>
            </DebugStep>
            <DebugStep src="/images/navpi-step-4.png">
              <span slot="title" class="title number">4</span>
              <span slot="text" class="subtext">Response (verification code) will be created, copy and paste it to the next step.</span>
            </DebugStep>
          </template>
        </InfoSection>
      </div>
    </ToggleSectionButton>
    <FooterMinimal />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import InfoSection from '@/components/InfoSection.vue'
import DebugStep from '@/components/DebugStep.vue'
import DownArrow from '@/components/DownArrow.vue'
import ListEntry from '@/components/ListEntry.vue'
import ToggleSectionButton from '@/components/ToggleSectionButton.vue'
import FooterMinimal from "@/components/FooterMinimal.vue"

import Copybox from '../components/Copybox'
import Hero from '../components/Hero'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import InputErrorLabel from '../components/InputErrorLabel'


export default {
  name: 'VerifyNewAddress',
  components: {
    InfoSection,
    DebugStep,
    DownArrow,
    ListEntry,
    ToggleSectionButton,
    Copybox,
    Hero,
    Button,
    TextInput,
    InputErrorLabel,
    FooterMinimal,
  },
  data: () => ({
    addressVerification: '',
    addressVerificationError: '',
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
      savePrevAddressVerification: 'savePrevAddressVerification'
    }),
    clickCreate: function(verification) {
      this.savePrevAddressVerification(verification);
      this.$router.push({ name: 'VerifyNewAddress' });
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
      }, function (e) {
        alert('Copy is disabled by your browser. Please copy manually.')
      })
    },
    verifySignature: function() {
      if (this.addressVerification.length !== 88 ) {
        this.addressVerificationError = 'A signed message length should be 88 characters long, current length is: ' + this.addressVerification.length
        return
      }
      this.addressVerificationError = ''
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

.input-container > .list-entry.text {
  font-size: 16px;

}

.toggle-button-container {
  margin-top: 75px;
}

.downarrow {
  margin-top: 10px;
}

.need-help {
  margin: 30px 0 0 0;
}

.button {
  margin: 30px 0;
}

.down-arrow-img {
  height: 20px;
  margin-bottom: 40px;
}

.footer-minimal-container {
  background-color: #f7f7f7;
}
</style>
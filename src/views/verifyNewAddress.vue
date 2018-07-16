<template>
  <div>
    <h1>Verify your address</h1>
    <input type="text" v-model="addressVerification"/>
    <div>
      <button v-if="!aliasCurrentAddress" @click="clickCreate(addressVerification)">Create alias</button>
      <button v-if="aliasCurrentAddress" @click="clickNext(addressVerification)">Next</button>
    </div>

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

export default {
  name: "verifyNewAddress",
  components: {
    InfoSection,
    DebugStep,
    DownArrow,
    ListEntry,
  },
  data: () => ({
    addressVerification: "",
    infoSectionStyle: { padding: '0' }
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
    clickNext: function(verification) {
      this.saveAddressVerification(verification);
      this.$router.push({ name: "signPrevAddress" });
    }
  }
};
</script>
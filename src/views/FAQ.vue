<template>
  <div>
    <h1>Frequently Asked Questions</h1>
    <h3>Pick your wallet.</h3>
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
              <span slot="title" class="title title number">2</span>
              <span slot="text" class="subtext">Paste your command, then hit Enter key on your keyboard.</span>
            </DebugStep>
            <DebugStep src="/images/d-console3.png">
              <span slot="title" class="title title number">3</span>
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
              <span slot="number" class="title number">1</span><span slot="text" class="text"> Go to the debug window.</span>
            </ListEntry>
            <ListEntry>
              <span slot="number" class="title number">2</span><span slot="text" class="text"> Then unlock your wallet with ‘walletpassphrase XXX 300’. XXX is your passphrase, and 300 refers to the amount of seconds it will be unlocked for.</span>
            </ListEntry>
            <ListEntry>
              <span slot="number" class="title number">3</span>  <span slot="text" class="text"> Then paste in the open alias registration command.</span>
            </ListEntry>
            <ListEntry>
              <span slot="number" class="title number">4</span><span slot="text" class="text">  Type in ‘walletlock’ to lock your wallet again for staking.</span>
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
    <FooterMinimal/>
  </div>
</template>

<script>
import InfoSection from "@/components/InfoSection.vue"
import DebugStep from "@/components/DebugStep.vue"
import DownArrow from "@/components/DownArrow.vue"
import ListEntry from "@/components/ListEntry.vue"
import ToggleSectionButton from "@/components/ToggleSectionButton.vue"
import FooterMinimal from "@/components/FooterMinimal.vue"


export default {
  name: "FAQ",
  components: {
    InfoSection,
    DebugStep,
    DownArrow,
    ListEntry,
    ToggleSectionButton,
    FooterMinimal,
  },
};
</script>

<style scoped>
  h1 {
    color: #7D59B4;
    size: 52px;
  }

  .toggle-button-container {
    margin-top: 30px;
  }

  .footer-minimal-container {
    background-color: #f7f7f7;
  }
</style>

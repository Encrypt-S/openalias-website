<template>
  <div>
    <h1>Verify your address</h1>
    <input type="text" v-model="addressVerification"/>
    <div>
      <button v-if="!aliasCurrentAddress" @click="clickCreate(addressVerification)">Create alias</button>
      <button v-if="aliasCurrentAddress" @click="clickNext(addressVerification)">Next</button>
    </div>

    <DebugSection bgColor="#f7f7f7" :containerStyle="infoSectionStyle">
      <template slot="title">How to open the debug window</template>
      <span slot="text" class="subtext hide"></span>
      <template slot="steps">
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
    </DebugSection>
    <DownArrow text="Get an error?"/>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import DebugSection from "@/components/DebugSection.vue"
import DebugStep from "@/components/DebugStep.vue"
import DownArrow from "@/components/DownArrow.vue"

export default {
  name: "verifyNewAddress",
  components: {
    DebugSection,
    DebugStep,
    DownArrow,
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
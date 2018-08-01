<template>
<div>
  <div class="template-container">
    <div v-if="!openAliasResponse.openAlias && !openAliasResponse.error">

      <img src="/images/d-loading.svg" alt="Loading" class="status-icon rotate">
      <h1>Creating Alias. Please wait...</h1>
    </div>
    <div class="success-display" v-if="openAliasResponse.openAlias">
      <img src="/images/d-sucess.svg" alt="Tick Icon" class="status-icon">
      <h1 class="success">{{alias}}@nav.community successful registered</h1>

      <div class="row">
        <div class="address">{{address}} </div>
        <img src="/images/d-right-bk.svg" class="arrow" />
        <div class="name"> {{alias}}@nav.community</div>
      </div>

      <p class="text">
        We have successfully registered <b>{{alias}}@nav.community</b> to <b>{{address}}</b><br />
        Please allow up to 10 minutes for the address to become active.
      </p>
    </div>

    <div class="error-display" v-if="openAliasResponse.error">
      <img src="/images/d-sorry.svg" alt="Cross Icon" class="status-icon">
      <h1>Oops... something went wrong</h1>

      <p class="text">
        It looks like we encountered an error when registering your address.
      </p>
      <p class="text error">
        Error: {{openAliasResponse.error}}
      </p>
      <Button @click="$router.push('/')">Try Again</Button>
    </div>


    <!-- <div class="debug">
      <h3>Debug data</h3>
      <p>Data that was sent</p>
      <pre>
        Address: {{address}}
        Alias: {{alias}}
        aliasCurrentAddress: {{aliasCurrentAddress}}
        addressVerification: {{addressVerification}}
        prevAddressVerification: {{prevAddressVerification}}
      </pre>
      <p>Data that was recieved</p>
      <pre>
        {{(openAliasResponse && JSON.stringify(openAliasResponse))}}
      </pre>
    </div> -->
  </div>
  <FooterMinimal />
</div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Button from "../components/Button";
import FooterMinimal from "@/components/FooterMinimal.vue";

export default {
  name: "CreateAlias",
  components: {
    Button,
    FooterMinimal
  },
  beforeMount: function() {
    this.createAlias();
  },
  computed: mapState([
    "address",
    "alias",
    "aliasCurrentAddress",
    "addressVerification",
    "prevAddressVerification",
    "openAliasResponse"
  ]),
  methods: {
    ...mapActions({
      createAlias: "createAlias"
    })
  }
};
</script>

<style scoped>
.status-icon {
  width: 90px;
  height: 90px;
  margin-top: 50px;
}

h1 {
  padding-top: 10px;
}

.arrow {
  width: 18px;
  grid-area: arrow;
}

.template-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #f3f3f3;
  height: calc(100vh - 180px);
  min-height: 600px;
}

.row {
  display: grid;
  grid-template-columns: 1fr minmax(340px, 480px) 18px minmax(340px, 480px) 1fr;
  grid-template-rows: 50px;
  grid-gap: 20px;
  align-items: center;
  justify-items: center;
  width: 80vw;
  grid-template-areas: ". address arrow name . ";
}

.address {
  width: 100%;
  grid-area: address;
  padding: 20px 0px;
  border-radius: 11px;
  background: #fff;
  color: #707070;
  box-shadow: #f7f7f7 5px 5px 5px, #f7f7f7 -5px -5px 5px;
}

.name {
  width: 100%;
  padding: 20px 0px;
  grid-area: name;
  border-radius: 11px;
  background: #fff;
  font-size: 18px;
  font-weight: bold;
  color: #34d159;
  box-shadow: #f7f7f7 5px 5px 5px, #f7f7f7 -5px -5px 5px;
}

.text {
  margin-top: 27px;
  color: #3e3e3e;
}

.success {
  color: #34d159;
}

.error {
  margin-top: 17px;
  font-family: monospace;
}

.button {
  margin: 30px 0;
}

.rotate {
  animation: spin 2s linear infinite;
}

@media (max-width: 992px) {
  .address,
  .name {
    padding: 20px 0;
  }

  .arrow {
    transform: rotate(90deg);
  }

  .row {
    padding: 25px 0;
    grid-gap: 10px;
    grid-template-columns: 1fr;
    grid-template-rows: auto 30px auto;
    grid-template-areas: "address" "arrow" "name";
    margin: auto;
  }
}

.debug {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  width: 100%;
  margin-top: 75px;
  background-color: cornsilk;
}

pre {
  width: 80vw;
  overflow: auto;
}

.footer-minimal-container {
  background-color: #f7f7f7;
}
</style>

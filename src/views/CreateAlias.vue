<template>
  <div class="template-container">
    <div v-if="!openAliasResponse.openAlias && !openAliasResponse.error">

      <img src="/images/d-loading.svg" alt="Loading" class="status-icon rotate">
      <h1>Creating Alias. Please wait...</h1>
    </div>
    <div class="success-display" v-if="openAliasResponse.openAlias">
      <img src="/images/d-sucess.svg" alt="Tick Icon" class="status-icon">
      <h1 class="success">Success!</h1>

      <div class="row">
        <div class="address">{{address}} </div>
        <img src="/images/d-right-bk.svg" class="arrow" />
        <div class="name"> {{alias}}@nav.community</div>
      </div>

      <p class="text">
        We have successfully registered {{alias}}@nav.community to {{address}}!<br>
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
      <a href="" class="button">Try again</a>
    </div>


    <div class="debug">
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
    </div>
    <FooterMinimal />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import FooterMinimal from "@/components/FooterMinimal.vue"

export default {
  name: "CreateAlias",
  components: {
    FooterMinimal,
  },
  beforeMount: function() {
    this.createAlias()
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
  justify-content: center;
  background-color: #F3F3F3;
}

.row {
  display: grid;
  grid-template-columns: 1fr minmax(340px, 480px) 18px minmax(340px, 480px) 1fr ;
  grid-template-rows: 50px;
  grid-gap: 5px;
  align-items: center;
  justify-items: center;
  width: 80vw;
  grid-template-areas:". address arrow name . ";
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
  color: #3E3E3E;
}

.success {
  color: #34d159;
}

.error {
  margin-top: 17px;
  font-family: monospace;
}

.button {
  display: inline-block;
  width: 225px;
  margin-top: 69px;
  padding: 14px 0px;
  border-radius: 30px;
  background-color: #7e5ab5;
  color: #fff;
  font-size: 25px;
  text-decoration: none;
}

.rotate {
  animation: spin 2s linear infinite;
}

@media (max-width: 992px) {

  .address, .name {
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
    grid-template-areas:"address" "arrow" "name";
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

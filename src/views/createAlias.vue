<template>
  <div class="template-container">
    <img src="/images/d-sucess.svg" alt="Tick Icon" class="success-icon">
    <h1>Success!</h1>

    <div class="row">
      <div class="address">{{address}} </div>
      <img src="/images/d-right-bk.svg" class="arrow" />
      <div class="name"> {{alias}}@nav.community</div>
    </div>

    <div class="success-text">
      We have successfully registered {{alias}}@nav.community to {{address}}!<br>
      Please allow up to 10 minutes for the address to become active.
    </div>

    <a href="" class="button">Done</a>

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
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "createAlias",
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

.success-icon {
  width: 90px;
  height: 90px;
  margin-top: 225px;
}

h1 {
  margin-bottom: 75px;
  color:#34D159;
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

.success-text {
  max-width: 932px;
  margin-top: 27px;
  color: #3E3E3E;
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
</style>

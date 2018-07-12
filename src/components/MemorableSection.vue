<template>
  <div class="template-container">
    <h2 class="title">A memorable NAV address</h2>
    <p class="subtext">Get the 34 character alphanumeric address from your wallet, and paste it into the field on the left above. Then create your own NavCoin Community OpenAlias address by typing your name on the right. Note: The system won't allow duplicate addresses.</p>
    <div class="address-container">
      <div class="heading-one">Full NavCoin Wallet Address</div>
      <div class="heading-two">Address converted using OpenAlias</div>
      <div class="row one">
        <div class="heading-one">Full NavCoin Wallet Address</div>
        <div class="address one">NYRqFrTMULcmK13rz1DAHqgf8PGSrfBduT </div>
        <div class="arrow one">→</div>
        <div class="heading-two">Address converted using OpenAlias</div>
        <div class="name one"> miguel@nav.community</div>
      </div>
      <div class="row two">
        <div class="address two">NTdsZrjjZbSUpF7VqkCeJ5xTm7Fu3b3AZn </div>
        <div class="arrow two">→</div>
        <div class="name two"> saori@nav.community</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MemorableSection',
}

</script>

<style scoped>

.template-container {
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title {
  display: inline-block;
  min-width: 140px;
  font-size: 32px;
}

.subtext {
  min-width: 200px;
  max-width: 60vw;
  text-align: left;
  margin-bottom: 35px;
}

@media (min-width: 1290px ) {
  .subtext {
    max-width: 775px;
  }
}

.arrow {
  display: inline-block;
  background-color: #f7f7f7;
  width: 30px;
  height: 30px;
  border-radius: 30px;
}
.address-container {
  display: grid;
  grid-gap: 20px;
  width: 70vw;
  grid-template-columns: minmax(340px, 3fr) minmax(90px, 1fr) 3fr;
  grid-template-rows: 50px 50px 50px;
  grid-template-areas:  "hd-one . hd-two"
                        "row-one row-one row-one"
                        "row-two row-two row-two";
  align-items: center;
  justify-items: center;
}

.heading-one {
  grid-area: hd-one;
}

.heading-two {
  grid-area: hd-two
}

.row {
  display: grid;
  grid-template-columns: minmax(340px, 3fr) minmax(90px, 1fr) 3fr;
  grid-template-rows: 50px;
  align-items: center;
  justify-items: center;
  border-radius: 15px;
  box-shadow: #f7f7f7 5px 5px 5px, #f7f7f7 -5px -5px 5px;
  width: 100%;
}


.address {
  padding: 0 10px;
  color: #a8a8a8;
}

.name {
  color: #34d159;
  font-size: 18px;
  font-weight: bold;
}

.row.one {
  grid-area: row-one;
  grid-template-areas:"addr-one arr-one name-one";
}

.row .heading-one, .row .heading-two {
  display: none;
}

.address.one {
  grid-area: addr-one;
}

.arrow.one {
  grid-area: arr-one;
}

.name.one {
  grid-area: name-one;
}


.row.two {
  grid-area: row-two;    
  grid-template-areas:"addr-two arr-two name-two";
}

.address.two {
  grid-area: addr-two;
}

.arrow.two {
  grid-area: arr-two;
}

.name.two {
  grid-area: name-two;
}

@media (max-width: 930px ) {
  
  .address-container {
    width: 90vw;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas: "row-one";
  }

  .heading-one,.heading-two {
    display: none;
  }

  .row .heading-one, .row .heading-two {
    display: initial;
  }

  .row .heading-one {
    grid-area: hd-one;
  }

  .row .heading-two {
    grid-area: hd-two;
  }

  .arrow {
    transform: rotate(90deg);
  }

  .row.one {
    padding: 25px 0;
    grid-gap: 10px;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, auto) 30px repeat(2, auto);
    grid-template-areas:"hd-one" "addr-one" "arr-one" "hd-two" "name-one";
  }

  .row.two {
    display: none;
  }
}


</style>

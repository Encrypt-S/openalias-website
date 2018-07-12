<template>
  <div class="topbar">
    <div>
      <span>NAV Open Alias</span>
    </div>
    <div class="nav">
      <a href="https://navcoin.org">NavCoin.org</a>
      <a href="https://navhub.org">NavHub.org</a>
      <router-link to="/help">Help</router-link>
      <a href="https://navcoin.org/navcoin-core/">Download Wallet</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TopMenu'
  }
</script>

<style scoped>
  .topbar {
    display: flex;
    height: 50px;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    top: 0;
  }

  .topbar > div {
    padding: 0 50px;
  }

  .nav {
    display: flex;
  }
  .nav > a {
    padding: 0 10px;
  }
</style>

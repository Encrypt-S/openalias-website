<template>
  <div class="topbar">
    <div>
      <router-link to="/">NAV OpenAlias</router-link>
    </div>
    <div class="mobile-menu-button">=</div>
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
    background: white;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
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

  .mobile-menu-button {
    display: none;
  }

  @media all and (max-width: 699px) {
    .mobile-menu-button {
      display: block;
    }
    .nav {
      flex-direction: column;
      display: none;
    }
  }


</style>

<template>
  <div id="menu-bar" class="menubar" v-bind:class="{ menuHidden: !menuIsOpen }">
    <div class="logo-and-menu">
      <router-link to="/" @click.native="closeMenu" class="logo-container">
        <img id="logo" src="../assets/logo.png" />
        <span class="logo-text">OpenAlias</span>
      </router-link>
      <div id="menu-icon" v-bind:class="{ open: menuIsOpen }" @click="toggleMenu()">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="menu">
      <ul id="menulinks" class="fadeIn-hidden">
        <li><a href="https://navcoin.org">NavCoin.org</a></li>
        <li><router-link to="/faq" @click.native="closeMenu">FAQ</router-link></li>
        <li><a href="https://navcoin.org/navcoin-core/" class="download">Download&nbsp;Wallet</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopMenu",
  data: () => ({
    menuIsOpen: false
  }),
  methods: {
    toggleMenu: function() {
      this.menuIsOpen = !this.menuIsOpen;
    },
    closeMenu: function() {
      this.menuIsOpen = false;
    }
  }
};
</script>

<style scoped>
/* MENU */
.menubar {
  position: fixed;
  top: 0;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  z-index: 99999;
  background: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}
#logo {
  height: 30px;
}
.logo-text {
  min-width: 110px;
  font-size: 1.3em;
  color: rgba(196, 88, 200, 1);
  text-decoration: none;
}
.logo-container {
  display: flex;
  align-items: center;
  margin-left: 40px;
  text-decoration: none;
}
.menu ul {
  list-style: none;
  display: flex;
  align-items: center;
  transition: opacity 2000ms;
  margin: 0 50px 0 0;
}
.menu ul li {
  margin-right: 30px;
  margin-left: 30px;
  cursor: pointer;
  font-size: 15px;
}
.menu ul li a {
  color: #707070;
  text-decoration: none;
}
.download {
  padding: 16px 18px;
  border-radius: 7px;
  border: 1px solid #707070;
}
.menu-icon {
  display: none;
}
.menu ul li:hover {
  color: red;
}
.menu #menulinks.menu-pink li {
  color: #d04f54;
}
.menu #menulinks.menu-pink li:hover {
  color: black;
}
@media only screen and (max-width: 800px) {
  .menubar {
    width: 100%;
    height: 100vh;
    z-index: 999;
    background-color: rgba(0, 0, 0, 1);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: background-color 1000ms;
    pointer-events: none;
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
  .menuHidden {
    transition: background-color 1000ms;
    background-color: rgba(255, 255, 255, 0);
  }
  .menu {
    background-color: rgba(0, 0, 0, 0) !important;
  }
  .menu ul li a {
    color: white;
  }
  .menuHidden .menu {
    transition: opacity 1000ms;
    opacity: 0;
    pointer-events: none;
  }
  .menuHidden .menu ul li {
    color: rgba(255, 255, 255, 0) !important;
    transition: color 1000ms;
    pointer-events: none;
  }
  .logo-and-menu {
    width: 100%;
    display: flex;
    justify-content: space-between;
    pointer-events: auto;
    align-items: center;
    height: 100px;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
  .menu {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: auto;
  }
  .menu ul {
    flex-direction: column;
    font-size: 25px;
    padding-bottom: 100px;
  }
  .menu ul li {
    margin: 3vh 0;
    opacity: 1;
    transition: color 1000ms;
    color: rgba(255, 255, 255, 1);
    pointer-events: auto;
  }
  .menu ul li a:hover {
    color: #c042ba;
  }
  /* Awesome menu icon */
  /* Credit Jess Couch - https://codepen.io/designcouch/pen/Atyop */
  #menu-icon {
    display: block;
    width: 30px;
    height: 30px;
    position: relative;
    margin: 0 30px 0 0;
    transform: rotate(0deg);
    transition: 0.5s ease-in-out;
    cursor: pointer;
  }
  #menu-icon span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: black;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
  }
  #menu-icon.menu-button-pink span {
    background: #c042ba;
  }
  #menu-icon.open span {
    background: #c042ba;
  }
  #menu-icon span:nth-child(1) {
    top: 0px;
  }
  #menu-icon span:nth-child(2),
  #menu-icon span:nth-child(3) {
    top: 12px;
  }
  #menu-icon span:nth-child(4) {
    top: 24px;
  }
  #menu-icon.open span:nth-child(1) {
    top: 18px;
    width: 0;
    left: 50%;
  }
  #menu-icon.open span:nth-child(2) {
    transform: rotate(45deg);
  }
  #menu-icon.open span:nth-child(3) {
    transform: rotate(-45deg);
  }
  #menu-icon.open span:nth-child(4) {
    top: 18px;
    width: 0;
    left: 50%;
  }
}
</style>
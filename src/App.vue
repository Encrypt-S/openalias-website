<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .fade-enter-active, .fade-leave-active {
    transition-property: opacity;
    transition-duration: .40s;
  }

  .fade-enter-active {
    transition-delay: .40s;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  .oa-toast {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    border: 0px;
    box-shadow: 0px 0px 24px 0px rgba(0,0,0,0.50);
    background: #fff;
    border-radius: 17px 17px 17px 17px;
  }

</style>

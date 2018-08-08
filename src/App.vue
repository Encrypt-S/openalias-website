<template>
  <div id="app">
    <TopMenu />
    <div style="padding-top: 80px">
    <transition name="fade">
      <router-view/>
    </transition>
    </div>
  </div>
</template>

<script>
  import TopMenu from './components/TopMenu'

  export default {
    name: 'App',
    components: {
      TopMenu,
    }
  }
</script>

<style>
* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Roboto', 'Regular', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1,h2,h3 {
  font-family: 'Raleway', 'Regular', Helvetica, Arial, sans-serif;
  color: #707070;
  font-weight: 300;
}

h2 {
  font-size: 45px;
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
  font-family: 'Roboto', 'Regular', Helvetica, Arial, sans-serif;
  border: 0px;
  box-shadow: 0px 0px 24px 0px rgba(0,0,0,0.50);
  background: #fff;
  border-radius: 17px 17px 17px 17px;
}

.hide {
  display: none;
}

.toasted-container.top-center {
  top:20%;
}

@keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }

</style>

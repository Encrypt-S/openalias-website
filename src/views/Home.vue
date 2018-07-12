<template>
  <HomeHero>
    <h2>Give your NavCoin address a name!</h2>
    <CreateAlias />
  </HomeHero>
</template>

<script>

import HomeHero from '../components/HomeHero'
import CreateAlias from '../components/CreateAlias'

export default {
  name: "Home",
  components: {
    HomeHero,
    CreateAlias
  }
};
</script>

<style scoped>
  h2 {
    color: white;
    margin: 0 0 20px 0;
  }
</style>

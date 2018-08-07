<template>
  <div class="hero">
    <slot></slot>
  </div>
</template>

<style scoped>
  .hero {
    min-height: 550px;
    //max-height: 600px;
    padding: 5% 0 60px 0;
    background: linear-gradient(to right, #5eade3 0%,#c340b9 100%);
  }


</style>

<template>
  <div class="hero">
    <slot></slot>
  </div>
</template>

<style scoped>
  .hero {
    min-height: 350px;
    padding: 50px 0;
    background: linear-gradient(to right, #5eade3 0%,#c340b9 100%);
  }
</style>

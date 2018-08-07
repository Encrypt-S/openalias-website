<template>
  <div class="hero">
    <slot></slot>
  </div>
</template>

<style scoped>
.hero {
  min-height: 550px;
  padding: 5% 0 90px 0;
  background: linear-gradient(to right, #5eade3 0%,#c340b9 100%);
}

@media (max-width: 780px){
  .hero{
    padding: 5% 0 60px 0;
  }
}

</style>

<template>
  <button class="button" @click="$emit('click')"><slot /></button>
</template>

<style scoped>
  .button {
    color: white;
    background: #7D59B5;
    border: 2px solid #C6B7FD;
    font-size: 1.1em;
    border-radius: 25px;
    padding: 10px 20px;
    cursor: pointer;
    outline: none;
  }

  .button:hover {
    background: #5f448a;
  }

  .button:active {
    background: #3f2f5e;
  }

</style>

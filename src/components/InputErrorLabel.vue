<template>
  <div class="label-container">
      <slot name="errorIcon">
      </slot>
      <slot name="errorText">
      </slot>
      <slot name="infoIcon">
    </slot>
  </div>
</template>

<script>
  export default {
    name: "InputErrorLabel"
  }
</script>

<style scoped>
  .label-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 0 0 0;
    width: 100%;
  }

  img, .icon {
    width: 20px;
    height: 20px;
  }

  .icon {
    background-color: #ccc;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    user-select: none;
  }
  
  .icon.hover:hover {
    filter: brightness(90%);
    cursor: help;
  }

  .text {
    margin: 0 10px;
  }

</style>
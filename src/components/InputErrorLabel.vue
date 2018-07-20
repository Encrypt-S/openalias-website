<template>
  <div class="label-container">
      <slot name="errorIcon">
      Icon
      </slot>
      <slot name="errorText">
        ErrorText
      </slot>
      <slot name="infoIcon">
      infoIcon
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
    align-items: flex-start;
    justify-content: center;
    padding: 10px;
    width: 100%;
  }

  img {
    width: 15px;
    height: 15px;
  }

  .text {
    margin: 0 10px;
  }

</style>
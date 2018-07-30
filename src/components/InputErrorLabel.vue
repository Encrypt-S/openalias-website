<template>
  <div class="label-container">
      <img src="/images/d-error.svg" alt="">
      <span class="text">{{msg}}</span>
      <!-- <div class="icon hover" :title="info">?</div> -->
  </div>
</template>

<script>
  export default {
    name: "InputErrorLabel",
    props: {
      msg: String,
      info: String,
    }
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
    background-color: #6c6c6c;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    user-select: none;
    line-height: 18px;
  }

  .icon.hover:hover {
    filter: brightness(70%);
    cursor: help;
  }

  .text {
    margin: 0 10px;
    color: white;
    text-align: left;
  }

</style>
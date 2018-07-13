<template>
  <div class="step">
    <slot name="title"></slot>
    <img :src="src" alt="">
    <slot name="text"></slot>
  </div>
</template>

<script>


export default {
  name: 'Icon',
  props: {
    src: String,
    iconData: Object
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.step {
  display: grid;
  grid-gap: 20px;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr;
  min-width: 275px; 
  margin: 15px 30px 30px 30px;
}

img {
  min-width: 86px;
  min-height: 86px;
  max-width: 312px;
  max-height: 263px;
}

.title {
  font-size: 18px;
  background-color: #7D59B4;
  width: 35px;
  height: 35px;
  display: inline-flex;
  border-radius: 30px;
  color: #fff;
  justify-content: center;
  align-items: center;
  box-shadow: #7E5AB5 0px 6px 12px;
}

.subtext {
  font-size: 12px;
  max-width: 312px;
  align-self: flex-start;
  justify-self: flex-start;
  text-align: left;
}

</style>

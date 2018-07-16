<template>
  <div class="entry">
    <slot name="number"></slot>
    <slot name="text"></slot>
  </div>
</template>

<script>


export default {
  name: 'ListEntry',
  props: {
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.entry {
  width: 100%;  
  text-align: left;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 35px 1fr;
  grid-template-areas: "number text";
  margin-bottom: 40px;
  width: 60vw;
  max-width: 775px;
  min-width: 440px;
}

.number {
  font-size: 18px;
  background-color: #7D59B4;
  width: 35px;
  height: 35px;
  border-radius: 30px;
  color: #fff;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-shadow: #7E5AB5 0px 6px 12px;
  grid-area: number;
}

.text {
  font-size: 20px;
  /* max-width: 312px; */
  align-self: flex-start;
  justify-self: flex-start;
  text-align: left;
  grid-area: text;
  padding-left: 30px;
}

</style>

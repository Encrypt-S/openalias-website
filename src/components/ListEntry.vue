<template>
  <div class="list-entry">
    <slot name="number"></slot>
    <slot name="text"></slot>
  </div>
</template>

<script>

export default {
  name: 'ListEntry',
}

</script>

<style scoped>
.list-entry {
  text-align: left;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 35px 1fr;
  grid-template-areas: "number text";
  margin-bottom: 40px;
  width: 80vw;
  max-width: 800px;
}


.number {
  display: inline-flex;
  grid-area: number;
  width: 35px;
  height: 35px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: #fff;
  background-color: #7D59B4;
  box-shadow: #7E5AB5 0px 6px 12px;
}

.text {
  grid-area: text;
  max-width: 750px;
  justify-self: flex-start;
  align-self: center;
  padding-left: 30px;
  font-size: 20px;
  text-align: left;
}

.text.small {
  font-size: 16px;
}

</style>

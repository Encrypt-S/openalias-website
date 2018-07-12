<template>
  <div class="template-container"  v-bind:style="{ backgroundColor: bgColor || 'white' }">
    <h2 class="title"><slot name="title" /></h2>
    <p class="subtext"><slot name="text"/></p>
    <div class="icon-container"><slot name="icons" /></div>
    <div class="button"><slot name="button"/></div>
  </div>
</template>

<script>

import Icon from "@/components/Icon.vue"

export default {
  name: 'InfoSection',
  props: {
    bgColor: String,
  },
}

</script>

<style scoped>

.template-container {
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title {
  display: inline-block;
  min-width: 140px;
  font-size: 32px;
}

.subtext {
  min-width: 200px;
  max-width: 60vw;
  text-align: left;
  margin-bottom: 35px;
}

@media (min-width: 1290px ) {
  .subtext {
    max-width: 775px;
  }
}

.icon-container {
  display: flex;
  flex-flow: wrap;
  align-content: center;
  justify-content: center;
}

.button a{
  display: inline-block;
  padding: 12px 40px;
  margin-top: 75px;
  border-radius: 30px;
  background-color: #7e5ab5;
  color: #fff;
  font-size: 18px;
}

</style>

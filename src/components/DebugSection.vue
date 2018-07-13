<template>
  <div class="template-container"  v-bind:style="containerStyle">
    <h2 class="title"><slot name="title" /></h2>
    <div class="step-container"><slot name="steps" /></div>
    <p class="subtext"><slot name="text"/></p>
    <div class="button"><slot name="button"/></div>
  </div>
</template>

<script>

import Icon from "@/components/Icon.vue"

export default {
  name: 'InfoSection',
  props: {
    containerStyle: Object,
  },
}

</script>

<style scoped>

.template-container {
  background-color: #fff;
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

.step-container {
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

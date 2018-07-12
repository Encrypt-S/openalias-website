<template>
  <div class="template-container">
    <h1 class="title">{{ title }}</h1>
    <div class="subtext">{{ subtext }}</div>
    <div class="icon-container">
      <Icon class="icon" v-for="iconData in iconArr" 
        :key="iconData.src" :iconData="iconData" />
    </div>

    <a class="button" v-if="buttonText">{{ buttonText }}</a>
  </div>
</template>

<script>

import Icon from "@/components/Icon.vue"

export default {
  name: 'IconList',
  components: {
    Icon
  },
  props: {
    msg: String,
    title: String,
    subtext: String,
    buttonText: String,
    iconArr: Array
  },
  methods: {
  },
  data: function() {
    return {
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  max-width: 775px;
  text-align: left;
  margin-bottom: 35px;
}

.icon-container {
  display: flex;
  flex-flow: wrap;
  align-content: center;
  justify-content: center;
}

.button {
  display: inline-block;
  padding: 12px 40px;
  margin-top: 75px;
  border-radius: 30px;
  background-color: #7e5ab5;
  color: #fff;
  font-size: 18px;
}

</style>

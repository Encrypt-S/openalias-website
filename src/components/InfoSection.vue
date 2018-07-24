<template>
  <div class="template-container"  v-bind:style="containerStyle">
    <h2 class="title"><slot name="title" /></h2>
    <p class="subtext"><slot name="text"/></p>
    <div class="child-container"><slot name="children" /></div>
    <div class="button"><slot name="button"/></div>
  </div>
</template>

<script>

export default {
  name: 'InfoSection',
  methods: {
  },
  props: {
    containerStyle: {
      type: Object,
      default: () => {}
    },
  },
  data: function() {
    return {
    }
  }
}

</script>

<style scoped>

.template-container {
  padding: 0;
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
  min-width: 440px;
  max-width: 60vw;
  text-align: left;
  margin-bottom: 35px;
}

@media (min-width: 1290px ) {
  .subtext {
    max-width: 775px;
  }
}

.child-container {
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

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
  name: "InfoSection",
  methods: {},
  props: {
    containerStyle: {
      type: Object,
      default: () => {}
    }
  },
  data: function() {
    return {};
  }
};
</script>

<style scoped>
.template-container {
  padding: 2% 0 80px 0;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title {
  display: inline-block;
  min-width: 140px;
  font-size: 40px;
}

@media (max-width: 780px){
  .title{
    font-size: 30px;
  }
  
}

.subtext {
  min-width: 280px;
  line-height: 34px;
  max-width: 80vw;
  margin: auto;
  font-size: 20px;
  font-weight: 300;
  margin: 0% 0% 2% 0%;
  text-align: left;
}

@media (min-width: 1290px ) {
  .subtext {
    max-width: 775px;
    font-size:18px;
    line-height:27px;
    text-align: left;
  }

  .title{
    display: inline-block;
    min-width: 140px;
    font-size: 45px;
  }
}

.child-container {
  display: flex;
  flex-flow: wrap;
  align-content: center;
  justify-content: center;
}

.button a {
  display: inline-block;
  padding: 12px 40px;
  margin-top: 75px;
  border-radius: 30px;
  background-color: #7e5ab5;
  color: #fff;
  font-size: 18px;
  text-decoration: none;
}

.button:hover a {
  background: #5f448a;
}

.button:active a {
  background: #3f2f5e;
}
</style>

<template>
  <div class="bar-container">
    <div class="back-button"><a @click="goBack" href=""><img src="/images/d-down-lil-bk.svg" class="back-arrow"/> Back</a></div>
    <div class="progress-bar">
      <div class="node">
        <div class="icon">
          <img src="/images/d-step-passed.svg" alt="Tick Mark">
        </div>
        <div class="node-subtext">{{nodeData.subtext}}</div>
      </div>
      <div class="bar">
      
      </div>
      <div class="node">
        <div class="icon">
          <img src="/images/d-step-working.svg" alt="3 dots">
        </div>
        <div class="node-subtext-bold">Step {{nodeData.currStep}} of {{nodeData.stepTotal}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProgressBar",
    props: {
      nodeData: Object,
    },
    methods: {
      goBack: function() {
        $router.go(-1)
      }
    }
  };
</script>

<style scoped>


.bar-container {
  --lime-green: #34d159;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #707070;
}

.progress-bar {
  width: 100%;
  max-width: 500px;
  display: grid;
  grid-template-columns: 100px 1fr 100px;
  grid-auto-flow: column;
  align-items: top;
  justify-items: center;
  grid-gap: 5px;
}

.node {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.node .icon {
  height: 60px;
  width: 60px;
  border-radius: 40px;
  background-color: var(--lime-green);
  margin-bottom: 5px;
}

.bar {
  background: var(--lime-green);
  width: 100%;
  height: 16px;
  margin: -42px 0 0 0;
  padding: 0 20px;
  align-self: center;
}

.node-subtext, .node-subtext-bold {
    font-size: 10px;
    height: 40px;
}

.node-subtext-bold {
  font-weight: bold;
  color: black;
}

.back-button {
  font-size: 20px;
  align-self: center;
  margin: -20px 100px 0 -100px;
}

a {
  text-decoration: none;
  color :#b2b2b2;
}

a:hover {
  color: #7d59b4;
}

.back-arrow {
  width: 15px;
  transform: rotate(90deg) translateX(-2px); 
}

</style>

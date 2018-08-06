<template>
  <div class="bar-container">
    <div class="back-button"><a @click="goBack" href=""><img src="/images/d-down-lil-bk.svg" class="back-arrow"/> <span class="back-text">Back</span></a></div>
    <div class="progress-bar">
      <div class="step">
        <div class="node">
          <div class="icon">
            <img src="/images/d-step-passed.svg" alt="Tick Mark">
          </div>
          <div class="node-subtext">Step 1 of {{nodeData.stepTotal}}</div>
        </div>
      </div>
      <div class="step">
        <div class="bar">
        </div>
        <div class="node">
          <div class="icon">
            <img src="/images/d-step-working.svg" alt="3 dots" v-if="nodeData.currStep !== 3">
            <img src="/images/d-step-passed.svg" alt="Tick Mark" v-if="nodeData.currStep === 3">
          </div>
          <div class="node-subtext-bold" v-if="nodeData.currStep !== 3">{{nodeData.subtext}}</div>
          <div class="node-subtext" v-if="nodeData.currStep === 3">Step 2 of {{nodeData.stepTotal}}</div>
        </div>
      </div>
      <div class="step" v-if="nodeData.stepTotal === 3">
        <div class="bar">
        </div>
        <div class="node">
          <div class="icon">
            <img src="/images/d-step-working.svg" alt="3 dots" v-if="nodeData.currStep === 3">
            <img src="/images/d-step-next.svg" alt="3 dots" v-if="nodeData.currStep !== 3">
          </div>
          <div class="node-subtext" v-if="nodeData.currStep === 3">{{nodeData.subtext}}</div>
          <div class="node-subtext" v-if="nodeData.currStep !== 3">Step {{nodeData.currStep}} of {{nodeData.stepTotal}}</div>
        </div>
      </div>
    </div>
    <div class="mobile-view">
      Step {{nodeData.currStep}} of {{nodeData.stepTotal}}
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
  max-width: 700px;
  display: grid;
  /* grid-template-columns: 100px 1fr 100px; */
  grid-auto-flow: column;
  align-items: top;
  justify-items: center;
  grid-gap: 5px;
}

.step {
  display: flex;
  align-items: center;
}

.node {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 20px;
  min-width: 100px;
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
  width: 80px;
  height: 16px;
  padding: 0 20px;
}

.node-subtext, .node-subtext-bold {
  font-size: 10px;
}

.node-subtext-bold {
  font-weight: bold;
  color: black;
}

.back-button {
  font-size: 20px;
  align-self: center;
  margin: -20px 5% 0 -5%;
}

.mobile-view {
  display: none;
}

@media (max-width: 750px) {
  .mobile-view {
    display: initial;
  }
  .progress-bar {
    display: none;
  }
  .back-text {
    display: none;
  }
  .back-button {
    margin: 0 35% 0 -35%;
  }
  .bar-container {
    justify-content: center;
  }
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

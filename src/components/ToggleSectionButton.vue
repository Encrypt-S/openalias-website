<template>
  <div class="toggle-button-container">
    <div @click="toggleSections()" class="toggleButton">
      <button :class="buttonOneStyle">{{buttonOneText}}</button>
      <button :class="buttonTwoStyle">{{buttonTwoText}}</button>
    </div>
    <div :class="sectionOneStyle"><slot name="sectionOne" /></div>
    <div :class="sectionTwoStyle"><slot name="sectionTwo" /></div>
  </div>
</template>

<script>

export default {
  name: 'ToggleSectionButton',
  methods: {
    toggleSections: function() {
      this.buttonOneStyle = this.updateStyle(this.buttonOneStyle)
      this.sectionOneStyle = this.updateStyle(this.sectionOneStyle)

      this.buttonTwoStyle = this.updateStyle(this.buttonTwoStyle)
      this.sectionTwoStyle = this.updateStyle(this.sectionTwoStyle)
    },
    updateStyle: (style) => {
      if(style.indexOf('active') !== -1) {
        return style.substring(0, style.indexOf('active'))
      } else {
        return style + 'active'
      }
    }
  },
  props: {
    buttonOneText: String,
    buttonTwoText: String,
  },
  data: function() {
    return {
      buttonOneStyle: 'button one active',
      buttonTwoStyle: 'button two ',
      sectionOneStyle: 'section active',
      sectionTwoStyle: 'section '
    }
  }
}

</script>

<style scoped>

.toggle-button-container {
  padding: 0;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.toggleButton {
  width: 100%;
  max-width: 500px;
  min-width: 280px;
  cursor: pointer;
}

.button {
  display: inline-block;
  width: calc(50% - 82px);
  padding: 12px 35px 12px 24px;
  background-color: #7e5ab5;
  border: 1px solid #7e5ab5;
  color: #fff;
  text-align: center;
  font-size: 13px;
}

.active {
  background-color: #fff;
  color: #7e5ab5;
}

.button:hover {
  filter: brightness(50%);
}

.button.active:hover {
  filter: none;
}

.button.one{
  border-radius: 10px 0 0 10px;
}

.button.two {
  border-radius: 0 10px 10px 0;
}

.section {
  display: none;
}

.section.active {
  display: initial;
}

</style>

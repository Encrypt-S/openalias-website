<template>
  <div>
    <div class="field">
      <input
        placeholder=" "
        class="text-input"
        :id="randomId"
        type="text"
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
        @blur="blurEvent ? blurEvent() : undefined"
        @input="inputEvent ? inputEvent() : undefined"
      >
      <label class="floating-placeholder" :for="randomId">
        <slot name="label"></slot>
      </label>
    </div>
    <slot name="errorLabel"></slot>
  </div>
</template>

<script>
export default {
  name: "TextInput",
  props: {
    value: String,
    blurEvent: Function,
    inputEvent: Function
  },
  data: function() {
    return {
      randomId:
        "textinput-" +
        Math.random()
          .toString(36)
          .substr(2, 4)
    };
  }
};
</script>

<style scoped>
.field {
  display: flex;
  flex-flow: column-reverse;
  align-items: start;
}

.floating-placeholder {
  color: #8e8e8e;
  align-items: center;
  margin-bottom: -20px;  
  padding-left: 15px;
  transform-origin: left bottom;
  transform: translate(0, 1.4rem) scale(1.3);
  transition: all 0.05s ease;
  cursor: text;
  font-size: 15px;
  font-weight: 300;
}

.text-input:focus + .floating-placeholder {
  margin-bottom: -23px;
  font-size: 13px;
  transform: translate(2px, 0) scale(1);
}

input:not(:placeholder-shown) + .floating-placeholder {
  margin-bottom: -23px;
  font-size: 13px;
  transform: translate(2px, 0) scale(1);
}

.text-input {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 1.2em;
  max-width: calc(100vw - 100px);
  min-width: 240px;
  width: 100%;
  border-radius: 7px;
  padding: 25px 10px 10px 20px;
  border: 0px;
  outline: none;
  box-shadow: 0px 11px 31px 0px rgba(141, 76, 191, 0.507);
  justify-content: space-between;
}

.text-input:focus {
  //box-shadow: rgba(38, 22, 51, 0.5) 10px 10px 31px;
  border: solid 2px #0289FE;
}
</style>

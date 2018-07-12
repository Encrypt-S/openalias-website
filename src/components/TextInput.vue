<template>
  <div class="field">
    <input
      placeholder=" "
      class="textInput"
      :id="randomId"
      type="text"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
    <label class="floating-placeholder" :for="randomId">
      <slot name="label"></slot>
    </label>
  </div>
</template>

<script>
  export default {
    name: 'TextInput',
    props: {
      value: String,
    },
    data: function() {
      return {
        randomId: 'textinput-' + Math.random().toString(36).substr(2,4)
      }
    }
  }
</script>

<style scoped>
  .field {
    display: flex;
    flex-flow: column-reverse;
    align-items: start;
  }

  .floating-placeholder {
    color: #8e8e8e;
    margin-bottom: -25px;
    padding-left: 15px;
    transform-origin: left bottom;
    transform: translate(0, 1.4rem) scale(1.3);
    transition: all 0.2s;
  }

  .textInput:focus + .floating-placeholder  {
    transform: translate(0, 0) scale(1);
  }


  input:not(:placeholder-shown) + .floating-placeholder {
    transform: translate(0, 0) scale(1);
  }

  .textInput {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 1.2em;
    min-width: 350px;
    border-radius: 3px;
    padding: 25px 10px 10px 20px;
    border: 0px;
    outline: none;
    box-shadow: rgba(141, 76, 191, 0.55) 0 11px 31px;
  }

  .textInput:focus {
    box-shadow: rgba(38, 22, 51, 0.85) 10px 10px 31px;
  }
</style>

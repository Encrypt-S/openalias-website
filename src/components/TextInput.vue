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
    name: 'TextInput',
    props: {
      value: String,
      blurEvent: Function,
      inputEvent: Function,
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

  .text-input:focus + .floating-placeholder  {
    transform: translate(0, 0) scale(1);
  }


  input:not(:placeholder-shown) + .floating-placeholder {
    transform: translate(0, 0) scale(1);
  }

  .text-input {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 1.2em;
    max-width: calc(100vw - 100px);
    width: 100%;
    border-radius: 7px;
    padding: 25px 10px 10px 20px;
    border: 0px;
    outline: none;
    /*box-shadow: rgba(141, 76, 191, 0.55) 0 11px 31px;*/
    box-shadow: 0px 11px 21px 0px rgba(0,0,0,0.30);
    justify-content: space-between;
  }

  /*.text-input {*/
    /*box-shadow: 0px 11px 21px 0px rgba(0,0,0,0.30);*/
    /*border-radius: 7px;*/
    /*margin-bottom: 20px;*/
    /*font-size: 1.1em;*/
  /*}*/

  .text-input:focus {
    box-shadow: rgba(38, 22, 51, 0.85) 10px 10px 31px;
  }

</style>

<template>
  <button class="button" @click="click" :disabled="isDisabled || debounce"><slot /></button>
</template>

<script>
export default {
  name: 'Button',
  data: function () {
    return {
      debounce: false
    }
  },
  props: {
    isDisabled: Boolean
  },
  methods: {
    click: function (event) {
      this.$emit('click')
      this.debounce = true
      setTimeout(() => {
        this.debounce = false
      }, 200)
    }
  }
}

</script>

<style scoped>
  .button {
    color: white;
    background: #7D59B5;
    border: 2px solid #C6B7FD;
    font-size: 1.1em;
    border-radius: 25px;
    padding: 10px 20px;
    cursor: pointer;
    outline: none;
    min-width: 200px;
  }

  .button:hover {
    background: #5f448a;
  }

  .button:active {
    background: #3f2f5e;
  }

  .button:disabled {
    filter: contrast(40%);
    cursor: not-allowed;
  }


</style>

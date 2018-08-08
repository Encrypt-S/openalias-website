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
    font:roboto;
    color: white;
    background: #7D59B5;
    border: 1px solid #C6B7FD;
    font-size: 1.1em;
    font-weight: 100;
    border-radius: 27px;
    padding: 15px 23px;
    cursor: pointer;
    outline: none;
    min-width: 200px;
    user-select: none;

  }

  .button:hover {
    background: #5f448a;
  }

  .button:active {
    background: #3f2f5e;
  }

  .button:disabled {
    filter: contrast(60%);
    cursor: not-allowed;
  }


</style>

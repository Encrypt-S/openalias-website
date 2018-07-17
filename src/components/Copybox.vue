<template>
  <div class="copybox">
    <div class="text-container">
      <slot></slot>
    </div>
    <div>
      <img @click="copy()" class="copy-icon" src="../assets/copy.svg">
    </div>
  </div>
</template>

<script>
  export default {
    name: "Copybox",
    methods: {
      copy: function () {
        this.$copyText(this.$slots.default[0].text).then((e) => {
          this.$toasted.show('Copied to clipboard', {
            position: 'top-center',
            theme: 'oa-toast',
            type: '',
            duration: '1000',
            className: 'oa-toast',
            action : {
              text : '✕',
              onClick : (e, toastObject) => {
                toastObject.goAway(0);
              }
            },
          })
        }, function (e) {
          alert('Copy is disabled by your browser. Please copy manually.')
          console.log(e)
        })
      },
    }
  };
</script>

<style scoped>
  .copybox {
    background: #fff;
    box-shadow: 0px 11px 21px 0px rgba(0,0,0,0.30);
    border-radius: 7px;
    margin-bottom: 20px;
    font-size: 1.1em;
    padding: 10px 20px;
    display: inline-flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }

  .copy-icon {
    height: 30px;
    cursor: pointer;
  }

  .copy-icon:hover {
    opacity: 0.5;
  }

  .text-container {
    display: flex;
    justify-content: center;
    flex-grow: 1;
  }
</style>

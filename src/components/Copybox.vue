<template>
  <div class="copybox">
    <slot></slot>
    <img @click="copy()" class="copy-icon" src="../assets/copy.svg">
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
          console.log(e)
        }, function (e) {
          alert('Can not copy')
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
    font-size: 2em;
    padding: 10px 20px;
    display: inline-flex;
    align-items: center;
  }

  .copy-icon {
    height: 40px;
    margin-left: 10px;
    cursor: pointer;
  }

  .copy-icon:hover {
    opacity: 0.5;
  }
</style>

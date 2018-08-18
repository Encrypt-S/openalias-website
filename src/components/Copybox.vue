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
        this.$copyText(this.$slots.default[0].text).then(() => {
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
        })
      },
    }
  };
</script>

<style scoped>
  .copybox {
    background: #fff;
    box-shadow: rgba(161, 144, 174, 0.19);
    border-radius: 7px;
    margin-bottom: 20px;
    font-size: 18px;
    padding: 10px 20px;
    display: inline-flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }

  @media (max-width:420px) {
    .copybox{
      font-size:13px;
    }
  }

  .copy-icon {
    height: 20px;
    margin: 10px 0 10px 0;
    cursor: pointer;
    opacity: 60;
  }

  .copy-icon:hover {
    opacity: 0.5;
  }

  .text-container {
    display: flex;
    justify-content: center;
    flex-grow: 1;
    font-family: 'Raleway', 'Regular', Helvetica, Arial, sans-serif;
    font-weight: 300;
  }
</style>

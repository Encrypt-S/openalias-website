<template>
  <div class="DownArrow">
    <div class="text">{{text}}</div>
    <img src="/images/d-down-lil-bk.svg" alt="Downward arrow">
  </div>
</template>

<script>


export default {
  name: 'DownArrow',
  props: {
    text: String,
  },
  methods: {
  },
  data: function() {
    return {
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 14px;
  height: 7px;
}

.text {
  font-size: 20px;
  color: #474747;
}

</style>

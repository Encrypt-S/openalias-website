<template>
  <div class="downarrow">
    <div class="text">{{text}}</div>
    <img src="/images/d-down-lil-bk.svg" alt="Downward arrow" />
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

<style scoped>
img {
  width: 20px;
  margin-bottom: 30px;
  margin-top: 10px;
}

.text {
  font-size: 20px;
  color: #474747;
}

</style>

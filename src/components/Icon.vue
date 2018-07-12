<template>
  <div class="icon">
    <img :src="src" alt="">
    <slot name="title"></slot>
    <slot name="text"></slot>
  </div>
</template>

<script>


export default {
  name: 'Icon',
  props: {
    src: String,
    iconData: Object
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
.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-width: 275px;
  margin: 15px 30px 30px 30px;
}

img {
  min-width: 86px;
  min-height: 86px;
  max-width: 126px;
  max-height: 126px;
}

.title {
  font-size: 18px;
}

.subtext {
  font-size: 12px;
  max-width: 210px;
}


</style>

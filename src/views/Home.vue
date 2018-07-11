<template>
  <div class="home">
    <img src="../assets/logo.png" />
    <OpenAlias />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import OpenAlias from "@/components/OpenAlias.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    OpenAlias
  },
  data: function() {
    return {
      text: ""
    };
  }
};
</script>

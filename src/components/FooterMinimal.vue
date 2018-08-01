<template>
  <nav class="footer-minimal-container">
    <ul class="">
      <li><router-link to="/privacy-policy">
        Privacy Policy
      </router-link></li>
      <li><router-link to="/terms-of-use">
        Terms of Use
      </router-link></li>
    </ul>
    <p>Proudly made by the <a href="http://navhub.org">NavCoin</a> Community!</p>
  </nav>
</template>

<script>
export default {
  name: "FooterMinimal"
};
</script>

<style scoped>
.footer-minimal-container {
  padding: 20px 0 0 0;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.footer-container,
a {
  color: #808080;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
  display: inline;
  padding: 10px;
}

a {
  opacity: 1;
  transition: color 500ms;
  pointer-events: auto;
  text-decoration: none;
}

a:hover {
  color: #c042ba;
}
</style>

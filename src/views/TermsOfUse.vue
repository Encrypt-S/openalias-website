<template>
  <div>
    <div class="terms-container">
      <h1>Terms of Use</h1>
      <div class="terms-of-use">
        <p>Do whatever you want.</p>
        <p>All code is available at github (<a href="https://github.com/Encrypt-S/openalias-website">website</a> / <a href="https://github.com/Encrypt-S/openalias-api">api</a>).</p>
        <p>If you discover an exploit, hit up the <a href="https://discord.gg/EB9BNzn">NavCoin discord</a> for a potential bounty.</p>
      </div>
    </div>
    <FooterMinimal />
  </div>
</template>

<script>
import FooterMinimal from "@/components/FooterMinimal.vue";

export default {
  name: "TermsOfUse",
  components: {
    FooterMinimal
  }
};
</script>

<style>
.terms-container {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  margin-top: 80px;
}

h1 {
  padding-top: 0px;
}

.terms-of-use {
  max-width: 80vw;
  padding: 0 0 60px 0;
}

.footer-minimal-container {
  background-color: #f7f7f7;
}
</style>

<template>
  <div>
  <div class="policy-container">
    <h1>Privacy Policy</h1>
    <div class="privacy-policy">
        <p>This server is hosted by <a href="https://encrypt-s.com">Encrypt-S.</a></p>
        <p>We do not collect any information on you except the details entered when creating an alias. This information becomes public and is stored using DNS by Encrypt-S and all other DNS providers worldwide.</p>
        <p>Please note: Currently there is no way to erase an address or alias once created.</p>
      </div>
    </div>
    <FooterMinimal />
  </div>
</template>

<script>
import FooterMinimal from "@/components/FooterMinimal.vue";

export default {
  name: "PrivacyPolicy",
  components: {
    FooterMinimal
  }
};
</script>

<style>
.policy-container {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  margin-top: 80px;
}

h1 {
  padding-top: 60px;
}

.privacy-policy {
  max-width: 80vw;
  padding: 30px 0 60px 0;
}

.footer-minimal-container {
  background-color: #f7f7f7;
}
</style>

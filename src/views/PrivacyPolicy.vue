<template>
  <div class="policy-container">
    <h1>Privacy Policy</h1>
    <div class="privacy-policy">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum doloribus non, reiciendis sint facere voluptates similique doloremque nisi officia veniam quam accusamus est delectus aspernatur veritatis. Error eligendi natus voluptates.
    </div>
    <FooterMinimal />
  </div>  
</template>

<script>
import FooterMinimal from "@/components/FooterMinimal.vue"


export default {
  name: 'PrivacyPolicy',
  components: {
    FooterMinimal,
  }
}
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

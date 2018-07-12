<template>
  <div class="home">
    <img src="../assets/logo.png" />
    <OpenAlias />
    <IconList
      title="Why use OpenAlias?"
      subtext="Open Alias was created by contributors to the Monero Cryptocurrency project who wanted to find a way of simplifying cryptocurrency payments by bridging the knowledge gap between cryptographically secure systems and users who aren't sophisticated developers."
      :iconArr="whyUseIconArr"
      class="why-use"
      />

    <IconList
      title="How OpenAlias Works"
      subtext="Follow the three easy steps and you'll be all set!"
      buttonText="Create your Alias"
      :iconArr="howItWorksIconArr"
      class="how-it-works"
      />
  </div>
</template>

<script>
// @ is an alias to /src
import OpenAlias from "@/components/OpenAlias.vue";
import IconList from "@/components/IconList.vue"


export default {
  name: "home",
  components: {
    OpenAlias,
    IconList
  },
  data: function() {
    return {
      whyUseIconArr: [
        {
          src: '/images/purple-telegram.png',
          title: 'Easier',
          subtext: 'You can transform long alphanumeric codes into an easily memorisable address.'
        },
        {
          src: '/images/purple-safe.png',
          title: 'Security',
          subtext: 'NavCoin OpenAlias leverages DNSSEC to prevent MITM attacks on the alias.'
        },
        {
          src: '/images/purple-fast.png',
          title: 'Saves Time',
          subtext: 'It\'s quicker and easier to remember a meaningful OpenAlias address than a long string of randomized characters.'
        }],
        howItWorksIconArr: [
        {
          src: '/images/purple-community.png',
          title: '1. Register your name',
          subtext: 'Register a name you like and the suffix \'@nav.community\' will be added to it'
        },
        {
          src: '/images/purple-message.png',
          title: '2. Copy the message to console',
          subtext: 'A line of code will be generated to verify your alias. Follow the instruction to copy it to your console.'
        },
        {
          src: '/images/purple-greentick.png',
          title: '3. Verify',
          subtext: 'The final step will involve pasting your verification code back into the OpenAlias website.'
        }]
    };
  }
};
</script>

<style scoped>
  .why-use {
    background-color: #f7f7f7;
  }
</style>

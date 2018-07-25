<template>
  <nav>
    <div class="footer-full-container">
      <div class="column">
        <div class="title">Important Links</div>
        <ul>
          <li><a href="https://github.com/NAVCoin/">Github</a></li>
          <li><a href="https://navcoin.org">NavCoin.org</a></li>
          <li><a href="http://info.navcoin.org/">Knowledge Base</a></li>
          <li><a href="https://navhub.org/">NavHub</a></li>
          <li><a href="https://navhub.org/news/">Community News</a></li>
          <li><a href="https://navhub.org/roadmap/">Community Roadmap</a></li>
          <li><a href="https://navexplorer.com/">Block Explorer</a></li>
          <li><a href="https://navtechservers.com">Nav Tech Servers (NTS)</a></li>
        </ul>
      </div>
      <div class="column">
        <div class="title">Community Channels</div>
        <ul>
          <li><a href="https://discord.gg/Dba8seZ">Discord</a></li>
          <li><a href="https://twitter.com/navcoin">Twitter</a></li>
          <li><a href="http://reddit.com/r/navcoin/">Reddit</a></li>
          <li><a href="https://t.me/navcoin">Telegram</a></li>
          <li><a href="https://www.facebook.com/NAVCoin">Facebook</a></li>
        </ul>
      </div>
      <div class="column">
        <div class="title">NavCoin</div>
        <div>NavCoin released under the <a href="https://opensource.org/licenses/mit-license.php">MIT License</a></div>
      </div>
    </div>
    <FooterMinimal />
  </nav>
</template>

<script>

import FooterMinimal from "@/components/FooterMinimal.vue"

export default {
  name: 'FooterFull',
  components: {
    FooterMinimal
  },
}

</script>

<style scoped>


.footer-full-container {
  padding: 0;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  margin-top: 40px;
  padding: 30px 0 20px 0;
  border-top: 1px black solid;
}

.title {
  font-size: 18px;
  text-align: left;
  padding-bottom: 10px;
}

.column {  
  text-align: left;
  padding: 20px 0 0 0px;
  font-size: 14px;
  max-width: 220px;
  width: 100%;
}

.footer-container, a {
  color: #808080;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
  padding: 5px 0 0 0;
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

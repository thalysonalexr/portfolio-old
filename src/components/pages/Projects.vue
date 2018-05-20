<template>
  <section id="projects" class="container">
    <h2>Meus Projetos no GitHub <i class="fab fa-github"></i></h2>
    <ul>
      <li><i class="fab fa-php fa-lg"></i> <a target="_blank" href="https://github.com/thalysonrodrigues/cadtreesa">Website Cadtreesa</a></li>
      <li><i class="fab fa-php fa-lg"></i> <a target="_blank" href="https://github.com/thalysonrodrigues/API-RESTful-cadtreesa">API Cadtreesa Project</a></li>
      <li><i class="fab fa-html5 fa-lg"></i> <a target="_blank" href="https://github.com/thalysonrodrigues/curriculum">Currículo</a></li>
      <li><i class="fab fa-vuejs fa-lg"></i> <a target="_blank" href="https://github.com/thalysonrodrigues/portfolio">Portfólio</a></li>
      <li><i class="fab fa-vuejs fa-lg"></i> <a target="_blank" href="https://github.com/thalysonrodrigues/vue-region-br">Region BR Client</a></li>
      <li><i class="fab fa-php fa-lg"></i> <a target="_blank" href="https://github.com/thalysonrodrigues/API-region-br">API Region BR</a></li>
      <li><i class="fab fa-vuejs fa-lg"></i> <a target="_blank" href="https://github.com/thalysonrodrigues/cadtreesa-client">Cadtreesa Client</a></li>
      <li><i class="fas fa-code"></i> <a target="_blank" href="https://github.com/thalysonrodrigues/encryption">Encryption</a></li>
      <li><i class="fab fa-html5 fa-lg"></i> <a target="_blank" href="https://github.com/thalysonrodrigues/photospace">Photospace</a></li>
      <li><i class="fab fa-python fa-lg"></i> <a target="_blank" href="https://github.com/thalysonrodrigues/extract-sort">Extract Sort</a></li>
      <li><i class="fab fa-php fa-lg"></i> <a target="_blank" href="https://github.com/thalysonrodrigues/qrcode-urls">QRCode de URL's</a></li>
      <li><i class="fas fa-code"></i> <a target="_blank" href="https://github.com/thalysonrodrigues/calcmath">Calcmath</a></li>
      <li><i class="fab fa-python fa-lg"></i> <a target="_blank" href="https://github.com/thalysonrodrigues/tic-tac-toe">Jogo da Velha (Tic-Tac-Toe)</a></li>
      <li><i class="fab fa-python fa-lg"></i> <a target="_blank" href="https://github.com/thalysonrodrigues/data-structures">Estrutura de Dados com Python</a></li>
    </ul>
    <h2>Como freelancer <i class="fas fa-laptop"></i></h2>
    <ul>
      <li><i class="fab fa-vuejs fa-lg"></i> <a target="_blank" href="http://stikers.com.br/">Stikers</a></li>
    </ul>
  </section>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
    this.$nextTick(function () {
      $(this.$el).hide()
      $(this.$el).fadeIn()
    })
  }
}
</script>

<style scoped>
section#projects{
  width: 50%;
  margin: auto;
}

section#projects h2{
  padding: 5%;
}

section#projects ul li{
  margin-bottom: 5%;
}

section#projects ul li i{
  margin-right: 2%;
}

section#projects ul li a{
  font-size: 1.5em;
}
</style>

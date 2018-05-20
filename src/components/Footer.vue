<template>
  <footer id="footer" class="bg-dark">
    <div class="footer-copyright py-3 text-center">
      <div id="f-social-network" class="container">
        <a href="https://www.facebook.com/profile.php?id=100008261989200" target="_blank"><i class="fab fa-facebook-f fa-lg"></i></a>
        <a href="https://github.com/thalysonrodrigues" target="_blank"><i class="fab fa-github fa-lg"></i></a>
        <a href="https://twitter.com/thalyson_rodss" target="_blank"><i class="fab fa-twitter fa-lg"></i></a>
        <a href="https://www.linkedin.com/in/thalyson-alexandre-rodrigues-de-sousa-46a99114a/" target="_blank"><i class="fab fa-linkedin-in fa-lg"></i></a>
      </div>
      <p id="copyright">Thalyson Rodrigues © {{ new Date().getFullYear() }} Copyright. Todos os direitos reservados</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
/* footer */

footer p{ text-align: center; }

#copyright{ color: #fff; }

/* redes socias no footer */

#f-social-network{
  margin-top: 2%;
  margin-bottom: 2%;
}

#f-social-network a i{
  margin-right: 3%;
  margin-left: 3%;
}

#f-social-network a i:hover{
  color: #fff;
}
</style>

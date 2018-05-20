<template>
  <section id="contact" class="container">
    <h2>Formas de contato</h2>
    <table class="table table-hover">
      <tbody>
        <tr>
          <td>Preferencial:</td>
          <td>(67) 3254-4584</td>
        </tr>
        <tr>
          <td>Celular:</td>
          <td>(67) 99853-5410</td>
        </tr>
        <tr>
          <td>E-mail:</td>
          <td>tha.motog@gmail.com</td>
        </tr>
        <tr>
          <td>Redes sociais</td>
          <td>
            <div id="social-network" class="container">
            <a target="_blank" class="facebook" href="https://www.facebook.com/profile.php?id=100008261989200"><i class="fab fa-facebook-f fa-2x"></i></a>
            <a target="_blank" class="github" href="https://github.com/thalysonrodrigues"><i class="fab fa-github fa-2x"></i></a>
            <a target="_blank" class="twitter" href="https://twitter.com/thalyson_rodss"><i class="fab fa-twitter fa-2x"></i></a>
            <a target="_blank" class="linkedin" href="https://www.linkedin.com/in/thalyson-alexandre-rodrigues-de-sousa-46a99114a/"><i class="fab fa-linkedin-in fa-2x"></i></a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <figure id="tellme">
      <img src="../../assets/img/callme.gif" alt="Tell me please!">
    </figure>
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
section#contact{
  width: 70%;
}

figure#tellme{
  text-align: center;
}

figure#tellme img{
  margin-top: 3%;
  width: 300px;
}
</style>

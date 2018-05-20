<template>
  <section id="additional" class="container">
    <h2>Informações complementares</h2>
    <table class="table table-hover">
      <tbody>
        <tr>
          <td><span>Remuneração atual:</span></td>
          <td>1.050,00 /mês</td>
          <td><span>Pretendida:</span></td>
          <td>4.500,00 /mês</td>
        </tr>
        <tr>
          <td><span>Trabalhando:</span></td>
          <td>Não</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td><span>Local de preferência:</span></td>
          <td>MT - Rondonópolis</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td><span>Meio de contato:</span></td>
          <td>Redes sociais</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td><span>Última atualização:</span></td>
          <td>11/03/2018</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
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
section#additional{
  width: 70%;
}
</style>

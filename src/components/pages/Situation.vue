<template>
  <section id="situation" class="container">
    <h2>Situação atual</h2>
    <table class="table table-hover">
      <tbody>
        <tr>
          <td><span>Cargo:</span></td>
          <td>Estagiário</td>
        </tr>
        <tr>
          <td><span>Cargo de interesse:</span></td>
          <td>Programador</td>
        </tr>
        <tr>
          <td><span>Disponibilidade:</span></td>
          <td>Integral</td>
        </tr>
        <tr>
          <td><span>Nível hierárquico:</span></td>
          <td>Trainee</td>
        </tr>
        <tr>
          <td><span><strong>Área de atuação</strong></span></td>
          <td></td>
        </tr>
        <tr>
          <td><span>Principal:</span></td>
          <td>Tecnologia da informação</td>
        </tr>
        <tr>
          <td><span>Primeira opção:</span></td>
          <td>E-Commerce</td>
        </tr>
        <tr>
          <td><span>Segunda opção:</span></td>
          <td>Administrativa</td>
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
section#situation{
  width: 70%;
}
</style>

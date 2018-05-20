<template>
  <section id="formation" class="container">
    <h2>Formação acadêmica</h2>
    <table class="table table-hover">
      <tbody>
        <tr>
          <td><span>Graduação máxima:</span></td>
          <td>Superior Cursando</td>
        </tr>
        <tr>
          <td><span>Intituição:</span></td>
          <td>Universidade Federal de Mato Grosso - Campus Universitário de Rondonópolis</td>
        </tr>
        <tr>
          <td><span>Curso:</span></td>
          <td>Sistemas de Informação</td>
        </tr>
        <tr>
          <td><span>Nível acadêmico:</span></td>
          <td>Superior Cursando</td>
        </tr>
        <tr>
          <td><span>Data de ínicio:</span></td>
          <td>01/08/2015</td>
        </tr>
        <tr>
          <td><span>Status:</span></td>
          <td>Não Concluído</td>
        </tr>
        <tr>
          <td><span>Observação:</span></td>
          <td>Capacidade de aplicar, de maneira criativa e efetiva, a informática e suas tecnologias nos processos de planejamento e gestão do ensino e aprendizagem nas organizações.</td>
        </tr>
        <tr>
          <td><span>Estado:</span></td>
          <td>MT</td>
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
section#formation{
  width: 70%;
}
</style>

<template>
  <section id="experience" class="container">
    <h2>Experiência profissional</h2>
    <table class="table table-hover">
      <tbody>
        <tr>
          <td><strong>Útilma</strong></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td><span>Empresa:</span></td>
          <td>Projeto Esperança Giuseppe Guttilla</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td><span>Segmento:</span></td>
          <td>Organização cívica e social</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td><span>Porte da Empresa:</span></td>
          <td>Micro Empresa</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td><span>Data de Ínicio:</span></td>
          <td>01/08/2016</td>
          <td><span>Data de término:</span></td>
          <td>28/12/2017</td>
        </tr>
        <tr>
          <td><span>Cargo:</span></td>
          <td>Monitor Pedagógico</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td><span>Relação de Emprego:</span></td>
          <td>Funcionário Público</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td><span>Salário:</span></td>
          <td>1.050,00</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td><strong>Penúltima</strong></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
        <td><span>Empresa:</span></td>
          <td>Escola Municipal Francesco Battista Giobbi</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td><span>Segmento:</span></td>
          <td>Educação</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td><span>Porte da Empresa:</span></td>
          <td>Pequeno(a)</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td><span>Data de Ínicio:</span></td>
          <td>01/02/2015</td>
          <td><span>Data de término:</span></td>
          <td>28/08/2016</td>
        </tr>
        <tr>
          <td><span>Cargo:</span></td>
          <td>Assistente Administrativo</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td><span>Relação de Emprego:</span></td>
          <td>Estagiário</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td><span>Salário:</span></td>
          <td>500,00.</td>
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
section#experience{
  width: 70%;
}
</style>

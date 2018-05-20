<template>
  <section id="data-person" class="container">
    <h2>Dados Pessoais</h2>
    <table class="table table-hover">
      <tbody>
      <tr>
        <td><span>Nome:</span></td>
        <td>Thalyson Alexandre Rodrigues de Sousa</td>
      </tr>
      <tr>
        <td><span>Data de Nascimento:</span></td>
        <td>24/02/1997</td>
      </tr>
      <tr>
        <td><span>Idade:</span></td>
        <td>21</td>
      </tr>
      <tr>
        <td><span>Endereço:</span></td>
        <td>Av. Wilson Barbosa Martins Casa Casa, 148 - Casa</td>
      </tr>
      <tr>
        <td><span>Bairro:</span></td>
        <td>Vila Nova</td>
      </tr>
      <tr>
        <td><span>Cidade:</span></td>
        <td>Sonora-MS / Brasil</td>
      </tr>
      <tr>
        <td><span>CEP:</span></td>
        <td>79415000</td>
      </tr>
      <tr>
        <td><span>CPF:</span></td>
        <td>***********</td>
      </tr>
      <tr>
        <td><span>Sexo:</span></td>
        <td>Masculino</td>
      </tr>
      <tr>
        <td><span>Estado civil:</span></td>
        <td>Solteiro</td>
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
section#data-person{
  width: 70%;
}
</style>

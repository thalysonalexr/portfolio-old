<template>
  <section id="courses" class="container">
    <h2>Cursos complementares</h2>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>Curso</th>
          <th>Intituição</th>
          <th>Inicio</th>
          <th>Conclusão</th>
          <th>Comentário</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>PHP para quem entende PHP</td>
          <td><a target="_blank" href="https://www.udemy.com">Udemy</a></td>
          <td>01/03/2018</td>
          <td>01/03/2018</td>
          <td>PHP para quem já entende PHP. Com duração de 2hrs.</td>
        </tr>
        <tr>
          <td>Domine o Sublime Text</td>
          <td><a target="_blank" href="https://www.udemy.com">Udemy</a></td>
          <td>01/03/2018</td>
          <td>01/03/2018</td>
          <td>Aumente sua produtividade com esse super editor. Com duração de 1hrs.</td>
        </tr>
        <tr>
          <td>Curso de HTML5</td>
          <td><a target="_blank" href="https://www.udemy.com">Udemy</a></td>
          <td>01/03/2018</td>
          <td>01/03/2018</td>
          <td>Aprenda HTML 5 de forma simples e rápida, da mesma forma que alunos de Graduação aprendem, sem precisar fazer Faculdade.</td>
        </tr>
        <tr>
          <td>Composer para Iniciantes</td>
          <td><a target="_blank" href="https://www.udemy.com">Udemy</a></td>
          <td>01/03/2018</td>
          <td>01/03/2018</td>
          <td>Composer para quem está iniciando nesse novo mundo dos gerenciadores de dependência. Curso com duração de 1hrs.</td>
        </tr>
        <tr>
          <td>Curso de HTML5</td>
          <td><a target="_blank" href="https://cursoemvideo.com">Curso em Vídeo</a></td>
          <td>01/05/2017</td>
          <td>05/05/2017</td>
          <td>Curso completo para quem quer aprender a criar sites utilizando as tecnologias de HTML5 + CSS3 + JavaScript. Com duração de 40hrs</td>
        </tr>
        <tr>
          <td>curso de PHP POO</td>
          <td><a target="_blank" href="https://cursoemvideo.com">Curso em Vídeo</a></td>
          <td>01/10/2016</td>
          <td>05/10/2016</td>
          <td>Conceitos do paradigma orientação a objetos com PHP. Com duração de 40hrs.</td>
        </tr>
        <tr>
          <td>Curso de PHP</td>
          <td><a target="_blank" href="https://cursoemvideo.com">Curso em Vídeo</a></td>
          <td>01/09/2016</td>
          <td>05/09/2016</td>
          <td>Curso de PHP iniciante, conhecimento da sintaxe e de como o PHP trabalha no servidor. Com duração de 40hrs.</td>
        </tr>
        <tr>
          <td>Curso de Java POO</td>
          <td><a target="_blank" href="https://cursoemvideo.com">Curso em Vídeo</a></td>
          <td>01/08/2016</td>
          <td>05/08/2016</td>
          <td>Conceitos do paradigma orientação a objetos com Java. Com duração de 40hrs.</td>
        </tr>
        <tr>
          <td>Curso de Java</td>
          <td><a target="_blank" href="https://cursoemvideo.com">Curso em Vídeo</a></td>
          <td>01/08/2016</td>
          <td>05/08/2016</td>
          <td>Sintaxe da linguagem e trabalhando com interface nativa JFrame. Com duração de 40hrs.</td>
        </tr>
        <tr>
          <td>Curso de Banco de Dados MySQL</td>
          <td><a target="_blank" href="https://cursoemvideo.com">Curso em Vídeo</a></td>
          <td>01/08/2016</td>
          <td>05/08/2016</td>
          <td>O MySQL é um dos Sistemas Gerenciadores de Banco de Dados mais populares do mercado. Ele pertence à Oracle e é utilizado na maioria dos sites atualmente. Com duração de 40hrs.</td>
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
section#courses{
  width: 70%;
}
</style>

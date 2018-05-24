<template>
  <section id="qualification" class="container">
    <h2>Qualificação profissional</h2>
    <article>
      <p>
        Trabalhar com desenvolvimento de sistemas de informação, aplicações de gerenciamento, interativas, blogs, sites etc. Desenvolvedor júnior backend em <strong>PHP</strong> e frontend com <strong>JavaScript</strong>. Já trabalhei com administração de secretária em escolas públicas e lecionando informática básica para crianças e adolescentes, atualmente estou trabalhando apenas como Freelancer. Tenho como hobbie programar em diversas linguagens como <em>PHP, JavaScript, Python, Delphi</em> dentre outras. Tenho foco e organização nas minimas tarefas exigidas. Extrovertido, gosto de compartilhar conhecimento e estou sempre pronto para aprender algo novo para me aperfeiçoar cada vez mais. Tenho habilidades como desenvolvedor backend, frontend, e com infraestrutura de projeto. Minha ambição é de ser um <strong>devOps fullstack</strong>.
      </p>
    </article>
    <figure id="fullstack">
      <img id="fullstack" src="../../assets/img/fullstack.png" alt="Fullstack developer">
      <figcaption>
        <p>
          Rumo ao fullstack <img id="walking" src="../../assets/img/walking.gif" alt="walking relax">
        </p>
      </figcaption>
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
section#qualification{
  width: 70%;
}

figure#fullstack{
  text-align: center;
}

figure#fullstack img#fullstack{
  width: 600px;
}

figure#fullstack figcaption p{
  text-align: center;
  font-size: 2em;
  font-family: 'Nothing You Could Do'!important;
}

#walking{
  width: 96px;
}
</style>

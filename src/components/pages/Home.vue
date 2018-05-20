<template>
  <section id="perfil" class="container">
    <h1 id="title">
      {{ title }}
    </h1>
      <figure id="perfil">
        <img id="perfil" src="../../assets/img/perfil.jpg" alt="Thalyson Alexandre Rodrigues de Sousa" class="img-thumbnail rounded d-block">
      </figure>
      <h2 id="name">Olá, eu me chamo Thalyson!</h2>
      <article id="biografia" class="container">
        <h3>Biografia</h3>
        <p>
          "Web developer backend em PHP e frontend com JavaScript, HTML5 e CSS3. Amante dos frameworks <a target="_blank" href="https://vuejs.org/">VueJs</a>, <a target="_blank" href="https://docs.zendframework.com/zend-expressive/">Zend Expressive</a> e <a target="_blank" href="https://github.com/Respect">Respect</a>. Fascinado por arquiteturas de Software como MVC e REST. Tenho como "chodó" o paradigma de orientação a objetos mas curioso no pensamento funcional. Pesquisador de conceitos para API's RESTful, middlewares, design patterns para PHP e Json Web Token's. Estudante de Sistemas de Informação (6º semestre) pela Universidade Federal de Mato Grosso Campus Universitário de Rondonópolis, 21 anos e sedento por novos projetos."
        </p>
      </article>
  </section>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      title: 'Bem-vindo ao meu Portfólio'
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
section#perfil{
  width: 80%;
}

/* biografia */

#biografia{
  margin-top: 10%;
}

#biografia p{
  padding: 2%;
  font-style: italic;
  border: 1px solid #dbdbdb;
  border-radius: 7px;
}

/* titulo */

h1#title{
  font-size: 3em;
  margin-bottom: 5%;
  text-align: center;
  font-family: 'Pacifico', cursive!important;
}

h2#name{
  font-size: 2em;
  margin-bottom: 3%;
  font-style: italic;
  text-align: center;
  margin-top: 2%;
  font-family: 'Pacifico'!important;
  font-style: normal;
}

/* foto de perfil */

figure#perfil{
  margin: auto;
  width: 250px;
  transition: 300ms ease;
}

figure#perfil:hover{
  transform: scale(1.1, 1.1);
}

img#perfil{
  width: 250;
  height: 250px;
  margin-right: 2%;
  margin-bottom: 2%;
  border-radius: 250px;
  border-radius: 250px!important;
  margin: 0 auto!important;
}
</style>

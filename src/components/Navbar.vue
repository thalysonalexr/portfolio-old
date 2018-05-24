<template>
  <header id="nav" class="pos-f-t">
    <div class="collapse" id="navbarToggleExternalContent">
      <div class="bg-dark p-4 background-img">
        <h4 class="text-white">Navegue entre tópicos</h4>
        <span class="text-muted">Deseja ver mais? <strong><router-link class="go-link" :to="{ path: '/contato' }">contate-me</router-link></strong></span>
        <ul id="topics" class="nav navbar-nav">
          <li><i class="fas fa-link"></i><router-link class="go-link" :to="{ path: '/' }">Biografia</router-link></li>
          <li><i class="fas fa-link"></i><router-link class="go-link" :to="{ path: '/dados' }">Dados pessoais</router-link></li>
          <li><i class="fas fa-link"></i><router-link class="go-link" :to="{ path: '/contato' }">Contato</router-link></li>
          <li><i class="fas fa-link"></i><router-link class="go-link" :to="{ path: '/qualificacao' }">Qualificação profissional</router-link></li>
          <li><i class="fas fa-link"></i><router-link class="go-link" :to="{ path: '/complementar' }">Informações complementares</router-link></li>
          <li><i class="fas fa-link"></i><router-link class="go-link" :to="{ path: '/situacao' }">Situação atual</router-link></li>
          <li><i class="fas fa-link"></i><router-link class="go-link" :to="{ path: '/formacao' }">Formação acadêmica</router-link></li>
          <li><i class="fas fa-link"></i><router-link class="go-link" :to="{ path: '/experiencia' }">Experiência profissional</router-link></li>
          <li><i class="fas fa-link"></i><router-link class="go-link" :to="{ path: '/cursos' }">Cursos complementares</router-link></li>
          <li><i class="fas fa-link"></i><router-link class="go-link" :to="{ path: '/informatica' }">Conhecimentos em informatica</router-link></li>
        </ul>
      </div>
    </div>
    <nav class="navbar navbar-dark bg-dark">
      <button @click.prevent="showHide()" id="navbar" class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
    }
  },
  methods: {
    show () {
      $('#slider').hide(100)
      $('#navbarToggleExternalContent').removeClass('collapsed')
      $('#navbarToggleExternalContent').slideDown()
    },
    hide () {
      $('#slider').show(100)
      $('#navbarToggleExternalContent').slideUp()
      $('#navbarToggleExternalContent').addClass('collapsed')
    },
    showHide () {
      if (!$('#navbarToggleExternalContent').is(':visible')) {
        this.show()
      } else {
        this.hide()
      }
    },
    hideByLink () {
      // close menu
      const close = this.hide

      $('.go-link').click(function () {
        close()
      })
    },
    changeBg () {
      let imgPath = [
        require('../assets/img/animate1.gif'),
        require('../assets/img/animate2.gif'),
        require('../assets/img/animate3.gif'),
        require('../assets/img/animate4.gif'),
        require('../assets/img/animate5.gif')
      ]

      let index = 1
      let maxImage = imgPath.length - 1

      setInterval(function () {
        var current = imgPath[index]
        index = (index === maxImage) ? 0 : ++index
        $('.background-img').css({
          'background-image': `url(${current})`
        })
      }, 60000)
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.hideByLink()
      this.changeBg()
    })
  }
}
</script>

<style scoped>
.background-img{
  background: url('../assets/img/animate1.gif');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-blend-mode: multiply;
  min-height: 100%;
  min-width: 100%;
  height: 100%;
  transition: background-image 500ms ease-in-out;
}
</style>

<template>
  <div>
    <button id="btn-left" @click.prevent="goLeft()" class="left btn btn-primary"><i class="far fa-hand-point-left fa-2x"></i></button>
    <button id="btn-right" @click.prevent="goRight()" class="right btn btn-primary"><i class="far fa-hand-point-right fa-2x"></i></button>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  data () {
    return {
      routes: [],
      firstPath: '/',
      lastPath: '/informatica'
    }
  },
  methods: {
    goLeft () {
      let prev = ''
      let current = this.$router.currentRoute.fullPath
      $('#btn-right').prop('disabled', false)

      for (var index in this.routes) {
        if (this.routes[index].path === current) {
          if (this.routes[parseInt(index) - 1] === undefined) {
            $('#btn-left').prop('disabled', true)
            return
          }
          if (this.routes[parseInt(index) - 1].path === this.firstPath) {
            this.$router.push(this.firstPath)
            $('#btn-left').prop('disabled', true)
            return
          }
          prev = this.routes[parseInt(index) - 1].path
          break
        }
      }

      this.$router.push(prev)
    },
    goRight () {
      let next = ''
      let current = this.$router.currentRoute.fullPath
      $('#btn-left').prop('disabled', false)

      for (var index in this.routes) {
        if (this.routes[index].path === current) {
          if (this.routes[parseInt(index) + 1] === undefined || this.routes[parseInt(index) + 1].path === '/*') {
            $('#btn-right').prop('disabled', true)
            return
          }
          if (this.routes[parseInt(index) + 1].path === this.lastPath) {
            this.$router.push(this.lastPath)
            $('#btn-right').prop('disabled', true)
            return
          }
          next = this.routes[parseInt(index) + 1].path
          break
        }
      }

      this.$router.push(next)
    },
    verify (current) {
      if (current === this.firstPath) {
        $('#btn-left').prop('disabled', true)
        $('#btn-right').prop('disabled', false)
      } else if (current === this.lastPath) {
        $('#btn-right').prop('disabled', true)
        $('#btn-left').prop('disabled', false)
      } else {
        $('#btn-left').prop('disabled', false)
        $('#btn-right').prop('disabled', false)
      }
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.routes = this.$router.options.routes
      this.verify(this.$router.currentRoute.fullPath)
    })
  },
  watch: {
    $route (to, from) {
      this.verify(to.fullPath)
    }
  }
}
</script>

<style scoped>
.btn{
  z-index: 1000!important;
  position: fixed;
  border: 2px solid #007bff;
  top: 43%;
}
.left{
  left: 3%;
}
.right{
  right: 3%;
}
.btn:hover{
  background-color: transparent;
}
.btn:hover i{
  color: #007bff;
}
</style>

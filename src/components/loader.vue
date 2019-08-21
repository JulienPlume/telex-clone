<template>
<div
@keydown.esc = consoler()>
  <p class="init">PRESS ENTER TO LAUCH INTERFACE {{msg}}</p>
  <input type="hidden">
</div>
</template>

<script>
// import keyboardMixin from '../mixins/keyboard'
export default {
  data () {
    return {
      msg: 'test'
    }
  },
  name: 'loader',
  created: function () {
    // window.addEventListener('keydown', this.onkey)
  },
  beforeDestroy: function () {
    // window.removeEventListener('keydown', this.onkey)
  },
  methods: {
    // onkey (event) {
    //   console.log(event)
    //   if (event.key === 'Enter') {
    //     console.log('enter pressed')
    //     this.msg = 'ok'
    //     this.$router.push('home')
    //   }
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.init{
  position: absolute; /* postulat de départ */
  top: 50%; left: 50%; /* à 50%/50% du parent référent */
  transform: translate(-50%, -50%);
  animation: blinker 1.5s step-start infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>

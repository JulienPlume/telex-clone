<template>
  <div class="template">
    <div class="head">

    </div>
    <div class="content">

    </div>
<!-- <div
@keydown.esc = consoler()> -->
  <div class="footer">
    <hr>
    <!-- <hr> -->
    <div class="status">
        <div class="soundBar">
          SOUND èèèèèè
        </div>
        <div class="playStopPause">ø Ñ</div>
        <div class="tempo">126 BPM</div>
    </div>
  </div>
</div>
</template>

<script>
// import keyboardMixin from '../mixins/keyboard'
export default {
  data () {
    return {
      msg: 'test'
    }
  }
  // ,
  // name: 'vcd-keyboard',
  // created: function () {
  //   window.addEventListener('keydown', this.onkey)
  // },
  // beforeDestroy: function () {
  //   window.removeEventListener('keydown', this.onkey)
  // },
  // methods: {
  //   onkey (event) {
  //     console.log(event)
  //     if (event.key === 'Enter') {
  //       console.log('enter pressed')
  //       this.msg = 'ok'
  //       this.$router.push('osm')
  //     }
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@keyframes blinker {
  50% {
    opacity: 0;
  }
}
.template{
  /* display: flex; */
}
.footer{
  position: absolute;
    margin: 0 auto;
      margin-left:2.5vw;
  margin-right:2.5vw;
  bottom:0;
  padding: 0 auto;
  /* left: 50%; /* à 50%/50% du parent référent */
  /* transform: translateX(25%); */
  /* width: 95vw; */
  height: 10%;
  /* background-color: red; */
  left: 0;
  right: 0;
}
  .status{
    /* background-color: red; */
    display: flex;
    justify-content: space-between;
  }
hr{
  /* overflow: hidden; */
  border: none;
  border-top: dashed darkgrey;
}
</style>

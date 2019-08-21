<template>
  <div id="app">
    <div class="topBar">
    <div class="header_opt header_home">HOME</div>
    <div class="header_opt header_settings">SETTINGS</div>
    <div class="header_opt header_sequencer">SEQUENCER</div>
    </div>
    <p class="CCell">C</p>
    <!-- <img src="./assets/logo.png"> -->
    <router-view class="router-view"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      msg: 'test'
    }
  },
  created: function () {
    window.addEventListener('keydown', this.onkey)
  },
  beforeDestroy: function () {
    window.removeEventListener('keydown', this.onkey)
  },
  methods: {
    onkey (event) {
      console.log(event)
      if (event.key === '1') {
        console.log('Tab pressed')
        this.msg = 'ok'
        this.$router.push('home')
      } else if (event.key === '2') {
        console.log('coucou caps!')
        this.$router.push('settings')
      }
    }
  }
}
</script>

<style>
.router-view{
  margin-left:2.5vw;
  margin-right:2.5vw;
}
@font-face {
  font-family: "Apple";
  src: url("assets/fonts/Apple.ttf");
}
body{
    /* background-color: black; */
    margin: 0 auto;
        background-color: black;
    height: 100vh;
    width: 100vw;
    padding: 0 auto;
}
#app {
  overflow: hidden;
    padding: 0 auto;
    background-color: black;
    height: 100vh;
    /* max-height: 100vh; */
    width: 100vw;
  font-family: 'Apple';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  /* margin-top: 60px; */
  /* font-size: 2.5%; */
}
.topBar{
  position: absolute;
  display: flex;
  justify-content: space-between;
  height: 15px;
  width: 50%;
  margin-top:2.5vw;
  margin-left:2.5vw;
}
.header_opt{
  background-color: darkslategrey;
  padding-left: 0.3em;
  padding-right: 0.3em;
}
.CCell{
  margin: 0 auto;
  position: absolute;
  /* padding-top: 5px;
  padding-left: 2px; */
  padding-bottom: 1px;
  padding-left: 1px;
  width: 20px;
  height: 15px;
  top:2.5vw;
  right:2.5vw;
  background-color: white;
  color: black;
  /* text-align:right */
}
</style>

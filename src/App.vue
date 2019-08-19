<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
@font-face {
  font-family: "Apple";
  src: url("assets/fonts/Apple.ttf");
}
body{
    /* background-color: black; */
    margin: 0 auto;
}
#app {
  font-family: 'Apple';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  /* margin-top: 60px; */
  /* font-size: 2.5%; */



}
</style>

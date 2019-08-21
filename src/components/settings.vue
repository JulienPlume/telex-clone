<template>
<div>
  <div class="settings_container">

  <div class="settings_list">
    <div class="settings_item" v-for='item in items' :key='item.id'
    :class='{"active-item": currentItem === item.id}'>
      {{item.text}}
    </div>
    <div class="screen_settings_simulator">
    </div>
  </div>
  <div class="settings_display">
  </div>
  </div>
</div>
</template>

<script>
// import keyboardMixin from '../mixins/keyboard'
export default {
  name: 'settings',
  data () {
    return {
      currentItem: 1,
      items: [{id: 1, text: 'soundcheck sin()'}, {id: 2, text: 'Grid display'}, {id: 3, text: 'volume èèèèèèèèèè'}]
    }
  },
  mounted () {
    document.addEventListener('keydown', this.nextItem)
  },
  methods: {
    nextItem () {
      if (event.keyCode === 38 && this.currentItem > 1) {
        this.currentItem--
      } else if (event.keyCode === 40 && this.currentItem < 3) {
        this.currentItem++
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.screen_settings_simulator{
  /* background-color: rgb(40,40,40); */
  width: 40vw;
  height: 30vw;
  margin: 0 auto;
  margin-top: 10vh;
  border: 2px dashed rgb(120,120,120);
}
.settings_item{
  padding-top: 4px;
  padding-bottom: 4px;  
}
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
.settings_container{
  margin-top: 15%;
  height: 20vh;
}
.settings_list{
  /* background-color: blue; */
  width:50%;
}
.active-item{
  background-color: white;
  color: black;
}
</style>

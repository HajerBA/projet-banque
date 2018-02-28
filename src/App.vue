<template>
  <div id="app">
    <!-- <First></First> -->
   <Opt></Opt>
  </div>
</template>

<script>
// import First from './components/First.vue';
//import Dog from './components/DogManagement.vue';
import Opt from './components/CompteManagement.vue';


export default {
    name:'app',
    components: {
        //First,
        //Dog,
        Opt
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

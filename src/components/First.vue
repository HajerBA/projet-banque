<template>


  <section>
      <img src="../assets/logo-couleur.png" alt="simplon" @click="show()">
      <h1>First code with VueJs</h1>

      
    <div>
        <input type="text" name="" id="" v-model="variable">
        <input type="number" v-model.number="a">
        <input type="number" v-model.number="b">
        <select name="" id=""></select>
        <p v-if="a && b">{{a}} + {{b}} = {{ a + b }}</p>
    </div>

        <!-- <ul>
            <li v-for="(item,index) of tab" v-bind:key="index" @mouseover="showItem(item)"  @dblclick="deleteItem(index)">
                {{index}} {{item}}</li>
        </ul> -->
<br>

        <a :href="variable">bloup</a>
      <List :tab="[1,2,3]"  v-on:action1="item => showItem(item)"  @action2="index =>deleteItem(index)"></List>

        
    
  </section>
</template>

<script>
import List from './List.vue';

export default {
    name:'first',
    components: {
        List
    },

   data: function(){
    return {
      variable:'bloup',
      a: 0,
      b: 0,
      tab: ['ga','zo','bu','meu']
    }
  },
  methods: {
      show: function () {
      
       alert('kekchoz :p');
       //click sur item
       
      },
      showItem (item){
      console.log(item);
  },
 
    deleteItem(index){
        this.tab.splice(index,1);
    }
  }
  
}
</script>

<style>

</style>

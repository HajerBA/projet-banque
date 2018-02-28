<template>

  <section>
      <img src="../assets/iconegest.jpg" alt="gestion" id="icon" >
      <h1>Account-Management</h1>
     <OptList :operations="tabOpt"></OptList>
     <AddOpt @addOpt="addOpt"></AddOpt> 
     
  </section>
</template>

<script>


import OptList from './ListOpt.vue';
import AddOpt from './AddOpt.vue';



export default {
    name:'CompteManagement',
    components: {
        AddOpt,
        OptList
    },

   data: function(){
    return {
      
      tabOpt: [{id: 1,title:'versement',category:'alimentaire', Date_Operation: '2017-01-30', money:'1000$'}]
      
    }
  },
  methods: {
     
      addOpt (form){//argument envoyé par l'event
        this.tabOpt.push(form);
      },
 
    deleteDog (optId){
      this.tabOpt= this.tabOpt.filter(form => form.id !== optId);
    }
  }
  
}
</script>

<style>
#icon{
  width: 400px;
  border-radius: 1cm;
}
</style>

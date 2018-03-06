<template>

  <section>
      <img src="../assets/iconegest.jpg" alt="gestion" id="icon" >
      <h1 class="maclass">Account-Management</h1>
      <AddOpt class="maclass" @addOpt="addOpt"></AddOpt>
      <OptList class="maclass" :operations="tabOpt" > </OptList>
      <OptMonth class="maclass" :months="monthOpt"></OptMonth>
      <!-- <AffGraph class="maclass" :months="monthOpt"></AffGraph> -->
      <AccountManage class="maclass" :accounts="account"></AccountManage>
      {{JSON.stringify(test)}}
     
  </section>
</template>

<script>


import OptList from './ListOpt.vue';
import AddOpt from './AddOpt.vue';
import OptMonth from './OptMonth.vue'
import AffGraph from './AffGraph.vue'
import AccountManage from './AccountsManag.vue'
import Testy from '../test.js'






export default {
    name:'CompteManagement',
    components: {
        AddOpt,
        OptList,
        OptMonth,
        AffGraph,
        AccountManage
    },

   data: function(){
    return {
      
      tabOpt: [{id: '',title:'',category:'', Date_Operation: '', money:'',action:''}],
      monthOpt: [{id: '',title:'', money:''}],
      account: [{Operations:'',ES:'',Ratio:''}],
      test: Testy.affOpt()
      
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
.maclass{
    margin: 88px;
    padding: 5px;
    border-bottom: 5px solid;
}
</style>

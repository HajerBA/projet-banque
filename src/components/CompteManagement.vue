<template>

  <section>
      <img src="../assets/iconegest.jpg" alt="gestion" id="icon" > <hr style="width:800px;">
      <AddOpt class="maclass" @addOpt="addOpt"></AddOpt>
      <OptList class="maclass" :operations="tabOpt" @removeOpt="removeOpt" > </OptList>
      <OptMonth class="maclass" :months="monthOpt"></OptMonth>
      <!-- <AffGraph class="maclass" :months="monthOpt"></AffGraph> -->
      <AccountManage class="maclass" :accounts="account"></AccountManage>
     
     
  </section>
</template>

<script>
import OptList from "./ListOpt.vue";
import AddOpt from "./AddOpt.vue";
import OptMonth from "./OptMonth.vue";
import AffGraph from "./AffGraph.vue";
import AccountManage from "./AccountsManag.vue";
import Testy from "../test.js";

export default {
  name: "CompteManagement",
  components: {
    AddOpt,
    OptList,
    OptMonth,
    AffGraph,
    AccountManage
  },

  data: function() {
    return {
      tabOpt: [
        {  title: "", category: "", Date_Operation: "", money: "" }
      ],
      monthOpt: [{ id: "", title: "", money: "" }],
      account: [{ Operations: "", ES: "", Ratio: "" }]
    };
  },
  beforeCreate() {
    Testy.affOpt().then(response => {
      this.tabOpt = response.data;
    });
    Testy.getTotal()
  },
  methods: {
    addOpt(data) {
      //argument envoyé par l'event
      Testy.addOpt(data.title, data.category, data.Date_Operation, data.money);
      Testy.affOpt().then((response) => {
        this.tabOpt.push(response.data);
      })
    },
    removeOpt(id) {
      Testy.removeOpt(id).then(() => {
        this.tabOpt.forEach((el, index) => {
          if (el.id === id){
            this.tabOpt.splice(index,1);
          }
        })
      })
    }
  }
}
</script>

<style>
#icon {
  width: 400px;
  border-radius: 1cm;
}
.maclass {
    margin: 70px;
    padding: 2px;
    border-bottom: 5px solid;
}
</style>

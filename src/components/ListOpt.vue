<template>

  <section>
    <div>
      <h3>Operation by category</h3>
      <b-navbar toggleable="md" type="dark" variant="info">
        <b-navbar-brand href="#">Total Count= {{totalCount}}</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">
        <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown text="Categories" right>
              <b-dropdown-item href="#">food</b-dropdown-item>
              <b-dropdown-item href="#">rent</b-dropdown-item>
              <b-dropdown-item href="#">salary</b-dropdown-item>
              <b-dropdown-item href="#">leisure</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>

        </b-collapse>
      </b-navbar>

    </div>
    <div>
      <h4>List of operations</h4>
      <b-table :fields="fields" :items="operations">
        <!-- A virtual composite column -->
        <template slot="action" slot-scope="data">
          <a  @click="onSubmit(data.item.id)"><i class="fas fa-trash-alt"></i></a>
        </template>
        
      </b-table>
    </div>
  </section>
</template>

<script>
//import Testy from '../test'

export default {
  name: "ListOpt",
  props: {
    operations: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      fields: [
        "id",
        { key: "title", label: "Type of operation" },
        "money",
        "category",
        "Date_Operation",
        // A virtual column
        { key: "action", label: "Action" }
      ]
    }
  },
  methods:{
   
    onSubmit (id) {
      this.$emit('removeOpt', id);
    }
  },
  computed: {
    totalCount(){
      let total = 0
      this.operations.forEach((option) => {
        total += option.money
      })
      return total
    }
  },
};
</script>

<style>
h4 {
  color: salmon;
}
</style>
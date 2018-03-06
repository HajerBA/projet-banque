<template>
 <section>
   <div>
        <h3>Accounts Management</h3>
        <div>
   <b-dropdown id="Num" text="Account Number" class="m-md-2">
    <b-dropdown-item>1234567</b-dropdown-item>
    <b-dropdown-item>2787666</b-dropdown-item>
    <b-dropdown-item>3098888</b-dropdown-item>
    
  </b-dropdown>
 </div>

      </div>
    <div>
      <h4>List of operations and E/S and Ratio</h4>
       <b-table striped hover :items="accounts"></b-table>
    </div>
    
 </section>
</template>

<script>
export default {
  name: "AccountManage",
  props: {
    accounts: {
      type: Array,
      required: true
    }
  }
};
</script>
<style>
h4 {
  color: salmon;
}
</style>
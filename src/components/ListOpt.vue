<template>
 <section>
      <div>
        <h3>Operation by category</h3>
         <b-navbar toggleable="md" type="dark" variant="info">

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
       <b-table striped hover :items="operations">
       
        <i class="fas fa-trash-alt"></i>
       </b-table>
    </div>
    
 </section>
</template>

<script>
export default {
  name: "OptList",
  props: {
    operations: {
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
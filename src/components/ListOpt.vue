<template>
 <section>
     
     

      <div>
        <h3>Operation by category</h3>
         <b-navbar toggleable="md" type="dark" variant="info">

  

  <b-collapse is-nav id="nav_collapse">

   

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

      <b-nav-form>
        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search Operation"/>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form>
     
    </b-navbar-nav>

  </b-collapse>
</b-navbar>

      </div>
    <div>
      <h3>List of operations</h3>
       <b-table striped hover :items="operations"></b-table>
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
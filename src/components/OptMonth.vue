<template>
 <section>
      <div>
        <h3>Operation by Month</h3>
         <b-navbar toggleable="md" type="dark" variant="info">

          <b-collapse is-nav id="nav_collapse">
          <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">

              <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search Operation"/>
                <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
              </b-nav-form>
             <b-nav-item-dropdown text="Months" right>
              <b-dropdown-item href="#">January</b-dropdown-item>
              <b-dropdown-item href="#">February</b-dropdown-item>
              <b-dropdown-item href="#">March</b-dropdown-item>
              <b-dropdown-item href="#">April</b-dropdown-item>
              <b-dropdown-item href="#">May</b-dropdown-item>
              <b-dropdown-item href="#">June</b-dropdown-item>
              <b-dropdown-item href="#">July</b-dropdown-item>
              <b-dropdown-item href="#">August</b-dropdown-item>
              <b-dropdown-item href="#">September</b-dropdown-item>
              <b-dropdown-item href="#">October</b-dropdown-item>
              <b-dropdown-item href="#">November</b-dropdown-item>
              <b-dropdown-item href="#">December</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>

          </b-collapse>
        </b-navbar>

      </div>
    <div>
      <h4>List of operations by Month</h4>
       <b-table striped hover :items="months"></b-table>
    </div>
    
 </section>
</template>

<script>
export default {
  name: "OptMonth",
  props: {
    months: {
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
<template>
<section>
      
      <h4>Add Operation</h4>
      
  <div>
    <b-form @submit.prevent="onSubmit" @reset="onReset">
      <b-form-group id="exampleInputGroup1"
                    label="Id:"
                    label-for="exampleInput1"
                    >
        <b-form-input id="exampleInput1"
                      type="number"
                      v-model="form.id"
                      required
                      placeholder="Enter id">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Title:"
                    label-for="exampleInput2"
                    >
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.title"
                      required
                      placeholder="Enter une operation">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup3"
                    label="Category:"
                    label-for="exampleInput3"
                    >
        <b-form-input id="exampleInput3"
                      type="text"
                      v-model="form.category"
                      required
                      placeholder="Enter une category">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup4"
                    label="Money:"
                    label-for="exampleInput4">
        <b-form-input id="exampleInput4"
                      type="number"
                      v-model="form.money"
                      required
                      placeholder="Enter money">
        </b-form-input>
      </b-form-group>
       <b-form-group id="exampleInputGroup5"
                    label="Date_Operation:"
                    label-for="exampleInput5">
        <b-form-input id="exampleInput5"
                      type="date"
                      v-model="form.Date_Operation"
                      required
                      placeholder="Enter Date_Operation">
        </b-form-input>
      </b-form-group>
      
      <b-button type="submit" variant="primary">Add</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>

  </div>
</section>
</template>

<script>

export default {
    name:'AddOpt',
  data () {
    return {
      form: {
        id:'',
        title: '',
        category:'',
        money: '',
        Date_Operation: ''
      }
    }
  },
  methods: {
    onSubmit () {
     
      this.$emit('addOpt',Object.assign({}, this.form));
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.id = '';
      this.form.title = '';
      this.form.category = '';
      this.form.money= '';
      this.form.Date_Operation = '';
      /* Trick to reset/clear native browser form validation state */
      
    }
  }
}
</script>
<style>
h4 {
  color: salmon;
}
</style>
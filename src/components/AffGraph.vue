<template>
 <section>
     
     

      <div>
        <h3>Graph</h3>
         <!-- <line-chart :data="{months}" :options="{id,month,title}"></line-chart> -->
      </div>
    
 </section>
</template>

<script>
// LineChart.js
import { Line } from 'vue-chartjs'

export default {
  name: 'AffGraph',
  extends: Line,
  props: ['data', 'options'],
   months: {
      type: Array,
      required: true
    },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>
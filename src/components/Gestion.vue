<template>
    <ul>
        <li v-for="(item,index) of tab" :key="index" @click="action1(item)" @dblclick="action2(index)">
        {{index}} {{item}}
        </li>
    </ul>
</template>

<script>
export default {
    name:'List',
    props:{
        tab: {
            type: Array,
            required: true
        } 
    },
    methods:{
        action1(item) {
            this.$emit('action1',item);
        },
        action2(index) {
            this.$emit('action2',index);
            
        }
    }
}
</script>

<style>

</style>

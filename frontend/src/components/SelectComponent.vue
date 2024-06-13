<template>
   
    <select class="form-select"  v-model="reactiveVariable">
        <template v-for="item in data" :key="item.id" >
            <option :value="item.id" >{{item.name}}</option>
        </template> 
    </select>
</template>

<script>
    export default {
        props:{
            data:{
                type:Array,
                required:true
            }
        },
        data(){
            return {
               reactiveVariable:null,
            }
        },
        watch:{
            reactiveVariable(newReactiveVariable){
            console.log(newReactiveVariable)
             this.$emit('input',newReactiveVariable)
           }
        }
            
        
    }
</script>

<style>

</style>
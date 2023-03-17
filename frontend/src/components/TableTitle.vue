<template>
  <div class="d-flex  justify-content-between">
         <h2>{{ title }}:</h2>
        <button
           @click="create"
           class="btn btn-outline-success"
           data-bs-toggle="offcanvas"
           :data-bs-target='`#${id}`'
           ><i
           class="bi bi-person-plus-fill me-2"></i><span
           class="d-none d-md-inline-block">Agregar
           {{
           title
           }}</span>
           </button>
  </div>
</template>

<script setup>
import {useOffCanvasStore} from '@/store/offCanvas.js'
const useOffCanvas=useOffCanvasStore();
const {create}=useOffCanvas;
    const props=defineProps({
        title:{
            type:String,
            required:true
        },
        id:{
            type:String,
            required:true,
        }
    })
 

</script>

<style>

</style>
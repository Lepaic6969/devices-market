<template>
  <div class="container-md container-fluid mt-5">
    <TableTitle title="Marcas" id="offcanvasTrademark"/>
    
      <TrademarkOffCanvas />
   
   
    <table class="table bg-white bg-opacity-75 mt-3 w-75" v-if="brands.length!==0">
          <thead >
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nombre</th>
              <th scope="col">Acción</th>
              
            </tr>
          </thead>
          <tbody>
            <tr v-for="brand in brands" :key="brand.id"> <!--Aquí debe ir el v-for después de la petición http-->
              <td >{{brand.id}}</td>
              <td >{{brand.name}}</td>
              <td>
                <!--Este es el botón que habilita mi offCanvas-->
               <button 
                  class="btn  btn-sm btn-secondary me-2" data-bs-toggle="offcanvas" data-bs-target='#offcanvasTrademark'
                  @click="updateAction(brand.id,brand.name)"
                  ><i
                  class="bi bi-arrow-repeat me-1"></i><span
                  class="d-none d-md-inline-block">Actualizar</span>
                  </button>
                <button class="btn btn-sm btn-danger" @click="deleteBrand(brand.id)"><i class="bi bi-trash me-1"></i><span class="d-none d-md-inline-block">Borrar</span></button>
              </td>
            </tr>
          
          </tbody>
        </table>
        <LoadingSpinner v-else/>
  </div>
 
  
</template>

<script setup>
  import TableTitle from '../components/TableTitle.vue';
  import TrademarkOffCanvas from '../components/offcanvas/TrademarkOffCanvas.vue';
  import LoadingSpinner from '../components/LoadingSpinner.vue';
  import {useBrandsStore} from '@/store/brands.js';
  import {useOffCanvasStore} from '@/store/offCanvas.js'
  import { storeToRefs } from 'pinia';
  import {onMounted} from 'vue';

  const useBrands=useBrandsStore();
  const useOffCanvas=useOffCanvasStore();
  const {updateAction}=useOffCanvas;
  const {create}=storeToRefs(useOffCanvas)
  const {brands}=storeToRefs(useBrands);
  const {getBrands,getBrandById,addBrand,updateBrand, deleteBrand}=useBrands;
  
onMounted(()=>{
  getBrands();
})
  
  

  
 
</script>

<style>

</style>
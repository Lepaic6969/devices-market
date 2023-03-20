<template>
  <div class="container-md container-fluid mt-5">
    <TableTitle title="Referencias" id="offcanvasReferences"/>
    <ReferencesOffCanvas/>

    <table class="table bg-white bg-opacity-75 mt-3 w-75" v-if="references.length!==0"> <!--v-if="references.length!==0"-->
          <thead >
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nombre</th>
              <th scope="col">Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="reference in references" :key="reference.id"> <!--Aquí debe ir el v-for después de la petición http-->
              <td >{{reference.id}}</td>
              <td >{{reference.name}}</td>
              <td>
                <!--Este es el botón que habilita mi offCanvas-->
               <button 
                  class="btn  btn-sm btn-secondary me-2" data-bs-toggle="offcanvas" data-bs-target='#offcanvasReferences'
                  @click="updateAction(reference.id,reference.name)"
                  ><i
                  class="bi bi-arrow-repeat me-1"></i><span
                  class="d-none d-md-inline-block">Actualizar</span>
                  </button>
                <button class="btn btn-sm btn-danger" @click="deleteReference(reference.id)"><i class="bi bi-trash me-1"></i><span class="d-none d-md-inline-block">Borrar</span></button>
              </td>
            </tr>
          
          </tbody>
        </table>
        <LoadingSpinner v-else/>
  </div>
  
</template>

<script setup>
  import TableTitle from '../components/TableTitle.vue';
  import ReferencesOffCanvas from '../components/offcanvas/ReferencesOffCanvas.vue';
  import LoadingSpinner from '../components/LoadingSpinner.vue';
  import {useReferencesStore} from '@/store/references.js';
  import {useOffCanvasStore} from '@/store/offCanvas.js'
  import { storeToRefs } from 'pinia';
  import {onMounted} from 'vue';

  const useReferences=useReferencesStore();
  const useOffCanvas=useOffCanvasStore();
  const {updateAction}=useOffCanvas;
  const {references}=storeToRefs(useReferences);
  const {getReferences,deleteReference}=useReferences;
  
onMounted(()=>{
  getReferences();
});
</script>

<style>

</style>
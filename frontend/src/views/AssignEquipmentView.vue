<template>
   <TableTitle title="Asignaciones" id="offcanvasAssign"/>
    <AssignOffCanvas/>
    <table class="table bg-white bg-opacity-75 mt-3 " v-if="records.length!==0">
             <thead >
               <tr>
                 <th scope="col" class=" d-none d-sm-table-cell">Id</th>
                 <th scope="col" >Id Empleado</th>
                 <th scope="col" >Id dispositivo</th>
                 <th scope="col">Acción</th>
               </tr>
             </thead>
    
             <tbody>
               <tr v-for="record in records" :key="record.id"> <!--Aquí debe ir el v-for después de la petición http-->
                 <td class=" d-none d-sm-table-cell">{{record.id}}</td>
                 <td >{{record.employeesId}}</td>
                 <td >{{record.devicesId}}</td>
                 <td>
                  <button 
                    class="btn  btn-sm btn-secondary me-2" data-bs-toggle="offcanvas" data-bs-target='#offcanvasAssign'
                    @click="updateAction(record.id,'')"
                    ><i
                    class="bi bi-arrow-repeat me-1"></i><span
                    class="d-none d-md-inline-block">Actualizar</span>
                  </button>
                  <button
                    class="btn btn-sm btn-danger"
                    @click="deleteRecord(record.id)"><i
                    class="bi bi-trash me-1"></i><span
                    class="d-none d-md-inline-block">Borrar</span></button>
                </td>
               </tr>
             
             </tbody>
           </table>
           <LoadingSpinner v-else/>
</template>

<script setup>
  import TableTitle from '../components/TableTitle.vue';
  import AssignOffCanvas from '../components/offcanvas/AssignOffCanvas.vue';
  import LoadingSpinner from '../components/LoadingSpinner.vue';

  
  import {useRecordsStore} from '@/store/records.js';
  import {useOffCanvasStore} from '@/store/offCanvas.js'
  import { storeToRefs } from 'pinia';
  import {onMounted} from 'vue';

  const useRecords=useRecordsStore();
  const useOffCanvas=useOffCanvasStore();
  const {updateAction}=useOffCanvas;
  const {records}=storeToRefs(useRecords);
  const {getRecords, deleteRecord}=useRecords;

  

  onMounted(()=>{
    getRecords();
  });
</script>

<style>

</style>
<template>
   <div>
      <div class="container-md container-fluid mt-5">
         <TableTitle title="Equipos" id="offcanvasEquipment"/>
         <EquipmentOffCanvas/>
           <table class="table bg-white bg-opacity-75 mt-3 " v-if="devices.length!==0">
             <thead >
               <tr>
                 <th scope="col">Id</th>
                 <th scope="col">Nombre</th>
                 <th scope="col" class=" d-none d-sm-table-cell">Serial</th>
                 <th scope="col" class=" d-none d-sm-table-cell">Descripcion</th>
                 <th scope="col" class=" d-none d-sm-table-cell">Estado</th>
                 <th scope="col">Id Marca</th>
                 <th scope="col">Id Referencia</th>
                 <th scope="col">Acción</th>
               </tr>
             </thead>
             <tbody>
               <tr v-for="device in devices" :key="device.id"> 
                 <td >{{device.id}}</td>
                 <td >{{device.name}}</td>
                 <td class=" d-none d-sm-table-cell">{{device.serial}}</td>
                 <td class=" d-none d-sm-table-cell">{{device.description}}</td>
                 <td class=" d-none d-sm-table-cell">{{device.state}}</td>
                 <td>{{device.brandsId}}</td>
                 <td>{{device.referencesId}}</td>
                 <td>
                    <button 
                    class="btn  btn-sm btn-secondary me-2" data-bs-toggle="offcanvas" data-bs-target='#offcanvasEquipment'
                    @click="updateAction(device.id,device.name)"
                    ><i
                    class="bi bi-arrow-repeat me-1"></i><span
                    class="d-none d-md-inline-block">Actualizar</span>
                    </button>
                  <button
                    class="btn btn-sm btn-danger"
                    @click="deleteDevice(device.id)"><i
                    class="bi bi-trash me-1"></i><span
                    class="d-none d-md-inline-block">Borrar</span></button>
                </td>
               </tr>
             
             </tbody>
           </table>
           <LoadingSpinner v-else/>
      </div>
     
   </div>
   
   </template>
   
   <script setup>
      import TableTitle from '../components/TableTitle.vue';
      import EquipmentOffCanvas from '../components/offcanvas/EquipmentOffCanvas.vue';
      import LoadingSpinner from '../components/LoadingSpinner.vue';

      import {useDevicesStore} from '@/store/devices.js';
      import {useOffCanvasStore} from '@/store/offCanvas.js'
      import { storeToRefs } from 'pinia';
      import {onMounted} from 'vue';

      const useDevices=useDevicesStore();
      const useOffCanvas=useOffCanvasStore();
      const {updateAction}=useOffCanvas;
      const {devices}=storeToRefs(useDevices);
      const {getDevices, deleteDevice}=useDevices;
  
      onMounted(()=>{
        getDevices();
      });
   </script>
   
   <style scoped>
   
   </style>
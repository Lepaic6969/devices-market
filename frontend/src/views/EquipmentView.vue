<template>
   <div>
      <div class="container-md container-fluid mt-5">
         <TableTitle title="Equipos" id="offcanvasEquipment"/>
         <!-- Filtro de búsqueda -->
         <div class="input-group flex-nowrap w-75 mt-4 mb-4">
            <span class="input-group-text bg-dark text-white" id="addon-wrapping"><i class="bi bi-search"></i></span>
            <input type="text" class="form-control " placeholder="Buscar por nombre" aria-label="Username" aria-describedby="addon-wrapping" v-model="filter">
         </div>
         <!-- Fin del filtro de búsqueda -->
         
         <EquipmentOffCanvas/>
           <table class="table bg-white bg-opacity-75 mt-3 " v-if="devices.length!==0">
             <thead >
               <tr>
                 <th scope="col">Id</th>
                 <th scope="col">Nombre</th>
                 <th scope="col" class=" d-none d-sm-table-cell">Serial</th>
                 <th scope="col" class=" d-none d-sm-table-cell">Descripcion</th>
                 <th scope="col" class=" d-none d-sm-table-cell">Estado</th>
                 <th scope="col">Marca</th>
                 <th scope="col">Referencia</th>
                 <th scope="col">Acción</th>
               </tr>
             </thead>
             <tbody>
               <tr v-for="device in diviceFilter" :key="device.id"> 
                 <td >{{device.id}}</td>
                 <td >{{device.name}}</td>
                 <td class=" d-none d-sm-table-cell">{{device.serial}}</td>
                 <td class=" d-none d-sm-table-cell">{{device.description}}</td>
                 <td class=" d-none d-sm-table-cell">{{(device.state)?'Disponible':'No Disponible'}}</td>
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
      import {ref,computed,onMounted} from 'vue';

      const useDevices=useDevicesStore();
      const useOffCanvas=useOffCanvasStore();
      const {updateAction}=useOffCanvas;
      const {devices}=storeToRefs(useDevices);
      const {getDevices, deleteDevice}=useDevices;

      //Variable reactiva para el filtro de búsqueda ....
      const filter=ref('');
      //Propiedad computada que es la que me filtra según lo digitado en el campo...
      const diviceFilter=computed(()=>{
        return devices.value.filter(el=>el.name.toLowerCase().includes(filter.value.toLowerCase()));
      })
  
      onMounted(()=>{
        getDevices();
      });
   </script>
   
   <style scoped>
   
   </style>
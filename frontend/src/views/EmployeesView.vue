<template>
<div>
   <div class="container-md container-fluid mt-5">
      <TableTitle title="Empleados" id="offcanvasEmployees"/>
      <EmployeesOffCanvas/>
        <table class="table bg-white bg-opacity-75 mt-3 " v-if="employees.length!==0">
          <thead >
            <tr >
              <th scope="col">Id</th>
              <th scope="col">Nombres</th>
              <th scope="col" class=" d-none d-sm-table-cell">Apellidos</th>
              <!-- <th scope="col" class=" d-none d-sm-table-cell">Dirección</th> -->
              <th scope="col">Teléfono</th>
              <th scope="col" class=" d-none d-sm-table-cell">Email</th>
              <th scope="col">Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="employee in employees" :key="employee.id"> 
              <td >{{employee.id}}</td>
              <td >{{employee.name}}</td>
              <td class=" d-none d-sm-table-cell">{{employee.lastName}}</td>
              <!-- <td class=" d-none d-sm-table-cell">{{employee.address}}</td> -->
              <td >{{ employee.phone }}</td>
              <td class=" d-none d-sm-table-cell">{{employee.email}}</td>
              <td>
                <button 
                  class="btn  btn-sm btn-secondary me-2" data-bs-toggle="offcanvas" data-bs-target='#offcanvasEmployees'
                  @click="updateAction(employee.id,employee.name)"
                  ><i
                  class="bi bi-arrow-repeat me-1"></i><span
                  class="d-none d-md-inline-block">Actualizar</span>
                  </button>
                <button
                  class="btn btn-sm btn-danger"
                  @click="deleteEmployee(employee.id)"><i
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
  import EmployeesOffCanvas from '../components/offcanvas/EmployeesOffCanvas.vue';
  import LoadingSpinner from '../components/LoadingSpinner.vue';

  import {useEmployeesStore} from '@/store/employees.js';
  import {useOffCanvasStore} from '@/store/offCanvas.js'
  import { storeToRefs } from 'pinia';
  import {onMounted} from 'vue';

  const useEmployees=useEmployeesStore();
  const useOffCanvas=useOffCanvasStore();
  const {updateAction}=useOffCanvas;
  const {employees}=storeToRefs(useEmployees);
  const {getEmployees, deleteEmployee}=useEmployees;
  
onMounted(()=>{
  getEmployees();
})
  
</script>

<style scoped>

</style>
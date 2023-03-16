<template>
   <div>
      <!-- **********************************Aquí viene la tabla**************************************************************** -->
      <div class="container-md container-fluid mt-5">
         <!-- <div class="d-flex  justify-content-between">
            <h2>Empleados:</h2>
            <button class="btn btn-outline-success" data-bs-toggle="offcanvas" data-bs-target="#offcanvasEmployees"><i class="bi bi-person-plus-fill me-2"></i><span class="d-none d-md-inline-block">Agregar Empleado</span> </button>
         </div> -->
         <TableTitle title="Equipos" id="offcanvasEquipment"/>
         <EquipmentOffCanvas/>
           <table class="table bg-white bg-opacity-75 mt-3 ">
             <thead >
               <tr>
                 <th scope="col">Id</th>
                 <th scope="col">Nombre</th>
                 <th scope="col" class=" d-none d-sm-table-cell">Serial</th>
                 <th scope="col" class=" d-none d-sm-table-cell">Id Marca</th>
                 <th scope="col" class=" d-none d-sm-table-cell">Id Referencia</th>
                 <th scope="col" class=" d-none d-sm-table-cell">Unidades</th>
                 <th scope="col">Estado</th>
                 <th scope="col">Acción</th>
               </tr>
             </thead>
             <tbody>
               <tr> <!--Aquí debe ir el v-for después de la petición http-->
                 <td >1</td>
                 <td >Samsung Y9</td>
                 <td class=" d-none d-sm-table-cell">#123456789</td>
                 <td class=" d-none d-sm-table-cell">1</td>
                 <td class=" d-none d-sm-table-cell">2</td>
                 <td class=" d-none d-sm-table-cell">Nuevo</td>
                 <td>Disponible</td>
                 <td><button class="btn  btn-sm btn-secondary me-1 me-md-2"><i class="bi bi-arrow-repeat me-1"></i><span class="d-none d-md-inline-block">Actualizar</span> </button><button class="btn btn-sm btn-danger"><i class="bi bi-trash me-1"></i><span class="d-none d-md-inline-block">Borrar</span></button></td>
               </tr>
             
             </tbody>
           </table>
      </div>
     
   </div>
   
   </template>
   
   <script>
   import EquipmentOffCanvas from '../components/offcanvas/EquipmentOffCanvas.vue';
   import TableTitle from '../components/TableTitle.vue';
   
   export default {
     components:{
      EquipmentOffCanvas,
      TableTitle
     }
   }
   </script>
   
   <style scoped>
   
   </style>
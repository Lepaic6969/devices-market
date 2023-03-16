<template>
   <TableTitle title="Asignaciones" id="offcanvasAssign"/>
    <AssignOffCanvas/>
    <table class="table bg-white bg-opacity-75 mt-3 ">
             <thead >
               <tr>
                 <th scope="col" class=" d-none d-sm-table-cell">Id</th>
                 <th scope="col" >Id Empleado</th>
                 <th scope="col" >Id dispositivo</th>
                 <th scope="col">Acción</th>
               </tr>
             </thead>
             <tbody>
               <tr> <!--Aquí debe ir el v-for después de la petición http-->
                 <td class=" d-none d-sm-table-cell">1</td>
                 <td >2</td>
                 <td >1</td>
                 <td><button class="btn  btn-sm btn-secondary me-2"><i class="bi bi-arrow-repeat me-1"></i><span class="d-none d-md-inline-block">Actualizar</span> </button><button class="btn btn-sm btn-danger"><i class="bi bi-trash me-1"></i><span class="d-none d-md-inline-block">Borrar</span></button></td>
               </tr>
             
             </tbody>
           </table>
</template>

<script>
import AssignOffCanvas from '../components/offcanvas/AssignOffCanvas.vue';
import TableTitle from '../components/TableTitle.vue';

export default {
  components:{
    AssignOffCanvas,
    TableTitle
  }
}
</script>

<style>

</style>
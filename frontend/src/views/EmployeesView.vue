<template>
<div>
   <!-- **********************************Aquí viene la tabla**************************************************************** -->
   <div class="container-md container-fluid mt-5">
      <!-- <div class="d-flex  justify-content-between">
         <h2>Empleados:</h2>
         <button class="btn btn-outline-success" data-bs-toggle="offcanvas" data-bs-target="#offcanvasEmployees"><i class="bi bi-person-plus-fill me-2"></i><span class="d-none d-md-inline-block">Agregar Empleado</span> </button>
      </div> -->
      <TableTitle title="Empleados" id="offcanvasEmployees"/>
        <table class="table bg-white bg-opacity-75 mt-3 ">
          <thead >
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nombres</th>
              <th scope="col" class=" d-none d-sm-table-cell">Apellidos</th>
              <th scope="col" class=" d-none d-sm-table-cell">Dirección</th>
              <th scope="col">Teléfono</th>
              <th scope="col" class=" d-none d-sm-table-cell">Email</th>
              <th scope="col">Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr> <!--Aquí debe ir el v-for después de la petición http-->
              <td >1</td>
              <td >Juan Camilo</td>
              <td class=" d-none d-sm-table-cell">Paredes Zamora</td>
              <td class=" d-none d-sm-table-cell">Calle 2 Carrera 8a</td>
              <td >3185633437</td>
              <td class=" d-none d-sm-table-cell">caamilo9517@gmail.com</td>
              <td><button class="btn  btn-sm btn-secondary me-1 me-md-2"><i class="bi bi-arrow-repeat me-1"></i><span class="d-none d-md-inline-block">Actualizar</span> </button><button class="btn btn-sm btn-danger"><i class="bi bi-trash me-1"></i><span class="d-none d-md-inline-block">Borrar</span></button></td>
            </tr>
          
          </tbody>
        </table>
   </div>
   <EmployeesOffCanvas/>
</div>

</template>

<script>
import EmployeesOffCanvas from '../components/offcanvas/EmployeesOffCanvas.vue';
import TableTitle from '../components/TableTitle.vue';

export default {
  components:{
   EmployeesOffCanvas,
   TableTitle
  }
}
</script>

<style scoped>

</style>
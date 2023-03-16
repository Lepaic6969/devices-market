<template>
  <div class="container-md container-fluid mt-5">
    <TableTitle title="Referencias" id="offcanvasReferences"/>
    <ReferencesOffCanvas/>

    <table class="table bg-white bg-opacity-75 mt-3 w-75">
          <thead >
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nombre</th>
              <th scope="col">Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr> <!--Aquí debe ir el v-for después de la petición http-->
              <td >1</td>
              <td >Celular</td>
              <td><button class="btn  btn-sm btn-secondary me-2"><i class="bi bi-arrow-repeat me-1"></i><span class="d-none d-md-inline-block">Actualizar</span> </button><button class="btn btn-sm btn-danger"><i class="bi bi-trash me-1"></i><span class="d-none d-md-inline-block">Borrar</span></button></td>
            </tr>
          
          </tbody>
        </table>
  </div>
  
</template>

<script>
import TableTitle from '../components/TableTitle.vue';
import ReferencesOffCanvas from '../components/offcanvas/ReferencesOffCanvas.vue';
export default {
  components:{
    TableTitle,
    ReferencesOffCanvas
  }
}
</script>

<style>

</style>
<template>
  <div class="container-md container-fluid mt-5">
    <TableTitle title="Marcas" id="offcanvasTrademark"/>
    <TrademarkOffCanvas title="Marca"/>
    <table class="table bg-white bg-opacity-75 mt-3 w-50">
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
              <td><button class="btn btn-secondary me-2"><i class="bi bi-arrow-repeat me-1"></i>Actualizar </button><button class="btn btn-danger"><i class="bi bi-trash me-1"></i>Borrar</button></td>
            </tr>
          
          </tbody>
        </table>
  </div>
 
  
</template>

<script>
import TableTitle from '../components/TableTitle.vue';
import TrademarkOffCanvas from '../components/offcanvas/TrademarkOffCanvas.vue';
export default {
  components:{
    TableTitle,
    TrademarkOffCanvas
  }
}
</script>

<style>

</style>
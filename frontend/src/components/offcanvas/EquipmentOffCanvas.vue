<template>
  
    <div class="offcanvas w-offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="offcanvasEquipment" aria-labelledby="offcanvasExampleLabel">
      <div class="offcanvas-header">
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
       <div class="container-form">
          <div class="container body" id="registration-form">
            
            <div >
                <h2 class="text-center">Registrar Dispositivo</h2>
                <form class="w-75 mx-auto">
                    <div class="form-group mb-2">
                        <label for="name" class="mb-2">Nombre:</label>
                        <input type="text" class="form-control w-100" id="name" placeholder="Nombre del dispositivo">
                    </div>
                    <div class="form-group mb-2">
                        <label for="serial" class="mb-2">Serial:</label>
                        <input type="text" class="form-control w-100" id="serial" placeholder="Ingrese el serial">
                    </div>
                    <div class="form-group mb-2">
                      <label class="mb-2">Marca:</label>
                      <SelectComponent :data="[{id:1,name:'Sonny'},{id:2,name:'Samsung'}]" v-model="brandId"/>
                       
                    </div>
                    <div class="form-group mb-2">
                        <label class="mb-2">Referencia:</label>
                        <SelectComponent :data="[{id:1,name:'Computador'},{id:2,name:'SmartPhone'}]" v-model="referenceId"/>
                    </div>
                    <div class="form-group mb-2">
                        <label for="description" class="mb-2">Descripcion:</label>
                        <input type="text" class="form-control w-100" id="description" placeholder="Ingrese la descripción del equipo.">
                    </div>
                    <div class="form-group mb-2">
                        <label for="state" class="mb-2">Estado del Equipo:</label>
                        <select class="form-select" id="state">
                            <option value="1">Nuevo</option>
                            <option value="2">Usado</option>
                        </select>
                    </div>
                    <div class="form-group mb-2">
                        <label for="available" class="mb-2">Disponibilidad del Equipo:</label>
                        <select class="form-select" id="available">
                            <option value="1">Disponible</option>
                            <option value="2">No Disponible</option>
                        </select>
                    </div>
                    
                 
                    <div class="form-group mb-2 mt-5">
                        <button type="submit" class="btn btn-outline-secondary btn-lg w-100">Registrar</button>
                    </div>
                </form>
            </div>
          </div>
       </div>
        
      </div>
    </div>
    </template>
    
    <script>
    import SelectComponent from '../SelectComponent.vue';
    export default {
        components:{
            SelectComponent
        },
        data(){
            return {
                brandId:null,
                referenceId:null,
            }
        }
       
    }
    </script>
    
    <style scoped>
        ::-webkit-scrollbar {
        width: 8px; /* Ancho de la barra de desplazamiento */
        background-color:  rgb(33,37,41); /* Color de fondo */
        }

        /* Estilos del thumb (control deslizante) de la barra de desplazamiento */
        ::-webkit-scrollbar-thumb {
        background-color:  #6c757d;/* Color del thumb */
        border-radius: 5px; /* Radio de la esquina */
        }
    
        .w-offcanvas{
            width:40%
        }
        #registration-form .frm{
        float:right;
        height: 650px;
        width: 50%;
        min-width: 250px;
        padding: 0 35px;
        background-size: 100% 100%;
        background-color: white;
    }
    
    #registration-form h1{
        margin-top: 30px;
        margin-bottom: 20px;
    }
    
    #registration-form .form-control{
        width: 90%;
        padding: 12px 20px;
        height: auto;
    }
    
    @media screen and (max-width: 700px){
    
        
        .w-offcanvas{
            width:100%
        }
        #registration-form .frm{
            width: 100%;
        }
    
        #registration-form .form-control{
            width: 100%;
        }
    }
    
    @media screen and (max-width: 500px){
        
    
        #registration-form .frm{
            width: 100%;
        }
    
        #registration-form h1{
            text-align: center;
        }
    
        #registration-form .btn{
            width: 100%;
            margin-top: 20px;
        }
    }
    </style>
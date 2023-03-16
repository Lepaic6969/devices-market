<template>
  
    <div class="offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="offcanvasAssign" aria-labelledby="offcanvasExampleLabel">
      <div class="offcanvas-header">
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
       <div class="container-form">
          <div class="container body" id="registration-form">
            
            <div >
                <h2 class="mb-5 text-center">Registrar Referencia</h2>
                <form>
                    <div class="form-group mb-2">
                        <label  class="mb-2">Empleado:</label>
                        <SelectComponent :data="[{id:1,name:'Juan Camilo'},{id:2,name:'Sebastian Gámez'},{id:30,name:'Jean Carlos'}]" v-model="employeesId"/>
                    </div>
                    <div class="form-group mb-2">
                        <label class="mb-2">Equipo:</label>
                        <SelectComponent :data="[{id:1,name:'Celular Y9'},{id:2,name:'Smart TV'},{id:66,name:'Apple Watch'}]" v-model="devicesId"/>
                    </div>
                    <div class="form-group mb-2">
                        <label for="date" class="mb-2">Fecha:</label>
                        <input type="date" id="date" v-model="date">
                    </div>
                    <div class="form-group mb-2">
                        <label for="note" class="mb-2 " >Observación:</label>
                        <input type="text" id="note" class="form-control w-100" v-model="date">
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
    components: { 
        SelectComponent
     },
    data(){
        return {
            employeesId:'',
            devicesId:'',
            date:'',
        }
    }
    }
</script>
    
<style scoped>
input[type="date"] {
  border-radius: 5px;
  padding: 5px;
  background-color: #444;
  color: #fff;
  border: none;
  width: 100%;
}

input[type="date"]:focus {
  outline: none;
  box-shadow: 0 0 0 2px #fff;
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
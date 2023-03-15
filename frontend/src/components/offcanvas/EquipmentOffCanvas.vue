<template>
  
    <div class="offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="offcanvasEquipment" aria-labelledby="offcanvasExampleLabel">
      <div class="offcanvas-header">
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
       <div class="container-form">
          <div class="container body" id="registration-form">
            
            <div >
                <h1>Registrar Empleado</h1>
                <form>
                    <div class="form-group mb-2">
                        <label for="name">Nombre:</label>
                        <input type="text" class="form-control" id="name" placeholder="Nombre del dispositivo">
                    </div>
                    <div class="form-group mb-2">
                        <label for="lastname">Serial:</label>
                        <input type="text" class="form-control" id="lastname" placeholder="Ingrese el serial">
                    </div>
                    <div class="form-group mb-2">
                        <label for="address">Direccicón:</label>
                        <input type="text" class="form-control" id="address" placeholder="Cra 7 Call 2">
                    </div>
                    <div class="form-group mb-2">
                        <label for="phone">Teléfono:</label>
                        <input type="text" class="form-control" id="phone" placeholder="7289660">
                    </div>
                    <div class="form-group mb-2">
                        <label for="email">Email:</label>
                        <input type="email" class="form-control" id="email" placeholder="Ingrese su Correo Electrónico">
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
    export default {
        //Aquí va toda la lógica con mis peticiones y eso...
    }
    </script>
    
    <style scoped>
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
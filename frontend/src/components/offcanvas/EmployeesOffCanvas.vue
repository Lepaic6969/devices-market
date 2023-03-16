<template>
  
<div class="offcanvas w-offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="offcanvasEmployees" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
   <div class="container-form">
      <div class="container body" id="registration-form">
        
        <div >
            <h2 class="mb-3 text-center">Registrar Empleado</h2>
            <form class="w-75 mx-auto">
                <div class="form-group mb-2">
                    <label for="name" class="mb-2">Nombres:</label>
                    <input type="text" class="form-control w-100" id="name" placeholder="Ingrese el nombre">
                </div>
                <div class="form-group mb-2">
                    <label for="lastname" class="mb-2">Apellidos:</label>
                    <input type="text" class="form-control w-100" id="lastname" placeholder="Ingrese el apellido">
                </div>
                <div class="form-group mb-2">
                    <label for="address" class="mb-2">Direccicón:</label>
                    <input type="text" class="form-control w-100" id="address" placeholder="Cra 7 Call 2">
                </div>
                <div class="form-group mb-2">
                    <label for="phone" class="mb-2">Teléfono:</label>
                    <input type="text" class="form-control w-100" id="phone" placeholder="7289660">
                </div>
                <div class="form-group mb-2">
                    <label for="email" class="mb-2">Email:</label>
                    <input type="email" class="form-control w-100" id="email" placeholder="Ingrese su Correo Electrónico">
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

.w-offcanvas{
    width:40%
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
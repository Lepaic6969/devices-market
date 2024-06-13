<template>
  
<div class="offcanvas w-offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="offcanvasEmployees" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
   <div class="container-form">
      <div class="container body" id="registration-form">
        
        <div >
            <h2 class="mb-3 text-center">{{title}}</h2>
            <form class="w-75 mx-auto" @submit.prevent="processForm">
                <div class="form-group mb-2">
                    <label for="name" class="mb-2">Nombres:</label>
                    <input type="text" class="form-control w-100" id="name" placeholder="Ingrese el nombre" v-model="name">
                </div>
                <div class="form-group mb-2">
                    <label for="lastname" class="mb-2">Apellidos:</label>
                    <input type="text" class="form-control w-100" id="lastname" placeholder="Ingrese el apellido" v-model="lastName">
                </div>
                <div class="form-group mb-2">
                    <label for="address" class="mb-2">Dirección:</label>
                    <input type="text" class="form-control w-100" id="address" placeholder="Cra 7 Call 2" v-model="address">
                </div>
                <div class="form-group mb-2">
                    <label for="phone" class="mb-2">Teléfono:</label>
                    <input type="number" class="form-control w-100" id="phone" placeholder="7289660" v-model="phone">
                </div>
                <div class="form-group mb-2">
                    <label for="email" class="mb-2">Email:</label>
                    <input type="email" class="form-control w-100" id="email" placeholder="Ingrese su Correo Electrónico" v-model="email">
                </div>
             
                <div class="form-group mb-2 mt-5">
                        <button
                        type="submit"
                        class="btn btn-outline-secondary btn-lg w-100"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                        >{{buttonText}}</button>
                  </div>
            </form>
        </div>
      </div>
   </div>
    
  </div>
</div>
</template>

<script setup>
        import {ref,watch} from 'vue'
        import {useEmployeesStore} from '@/store/employees.js';
        import {useOffCanvasStore} from '@/store/offCanvas.js'
        import { storeToRefs } from 'pinia';
       
        const useEmployees=useEmployeesStore();
       
        const {employees}=storeToRefs(useEmployees);
        const {getEmployeeById,addEmployee,updateEmployee}=useEmployees;

        const useOffCanvas=useOffCanvasStore();
        const {create,id,title,buttonText}=storeToRefs(useOffCanvas);

        
        //Variables Reactivas...
        const name=ref('');
        const lastName=ref('');
        const address=ref('');
        const phone=ref('');
        const email=ref('');
        
        //Funcionalidad del formulario.
        const formValidation=()=>{
            let flag=true;
            if(name.value===''|| lastName.value===''|| address.value==='' || phone.value==='' || email.value===''){
                flag=false
            }
            return flag;
        }
        const processForm=()=>{
            const correctForm=formValidation();
            // console.log(correctForm)
            if(correctForm){
                (create.value)?createItem():updateItem();
            }
            //TODO: Aquí debería ir el código para las alertas visuales del formulario.
         
        }
        const createItem=()=>{
                const employee={
                id:employees.value[employees.value.length-1]?.id+1 || 1,
                name:name.value,
                lastName:lastName.value,
                // address:address.value,
                phone:phone.value.toString(),
                email:email.value

                }
               
                addEmployee(employee);
                name.value='';  
                lastName.value='';
                address.value='';
                phone.value='';
                email.value='';
        }
        const updateItem=()=>{
            const newBrand={
                id:id.value, 
                name:name.value,
                lastName:lastName.value,
                address:address.value,
                phone:phone.value,
                email:email.value
            }
            console.log(`Data que recojo del formulario: ${JSON.stringify(newBrand)}`);
            updateEmployee(id.value,newBrand);
        }
      

        //Este es el watch en composition API.
        watch(title,(newTitle,oldTitle)=>{
            
              let item=getEmployeeById(id.value)
              if(item){
                name.value=item.name,
                lastName.value=item.lastName,
                address.value=item.address,
                phone.value=item.phone,
                email.value=item.email
              }else{
                name.value='',
                lastName.value='',
                address.value='',
                phone.value='',
                email.value=''
              }
        });
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
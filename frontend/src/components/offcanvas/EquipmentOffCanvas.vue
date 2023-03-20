<template>
  
    <div class="offcanvas w-offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="offcanvasEquipment" aria-labelledby="offcanvasExampleLabel">
      <div class="offcanvas-header">
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
       <div class="container-form">
          <div class="container body" id="registration-form">
            
            <div >
                <h2 class="text-center">{{title}}</h2>
                <form class="w-75 mx-auto" @submit.prevent="processForm">
                    <div class="form-group mb-2">
                        <label for="name" class="mb-2">Nombre:</label>
                        <input type="text" class="form-control w-100" id="name" placeholder="Nombre del dispositivo" v-model="name">
                    </div>
                    <div class="form-group mb-2">
                        <label for="serial" class="mb-2">Serial:</label>
                        <input type="text" class="form-control w-100" id="serial" placeholder="Ingrese el serial" v-model="serial">
                    </div>
                    <div class="form-group mb-2">
                        <label for="description" class="mb-2">Descripcion:</label>
                        <input type="text" class="form-control w-100" id="description" placeholder="Ingrese la descripción del equipo." v-model="description">
                    </div>
                    <!-- <div class="form-group mb-2">
                        <label for="state" class="mb-2">Estado del Equipo:</label>
                        <select class="form-select" id="state">
                            <option value="1">Nuevo</option>
                            <option value="2">Usado</option>
                        </select>
                    </div> -->
                    <div class="form-group mb-2">
                        <label for="available" class="mb-2">Disponibilidad del Equipo:</label>
                        <select class="form-select" id="available" v-model="stateForm">
                            <option value="true">Disponible</option>
                            <option value="false">No Disponible</option>
                        </select>
                    </div>
                    <div class="form-group mb-2">
                      <label class="mb-2">Marca:</label>
                      <SelectComponent :data="brands" v-model="brandsId"/>
                       
                    </div>
                    <div class="form-group mb-2">
                        <label class="mb-2">Referencia:</label>
                        <SelectComponent :data="references" v-model="referencesId"/>
                        <!-- <SelectComponent :data="[{id:1,name:'Computador'},{id:2,name:'SmartPhone'}]" v-model="referencesId"/> -->
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
        import SelectComponent from '../SelectComponent.vue';
        import {ref,watch,onMounted} from 'vue'
        import {useDevicesStore} from '@/store/devices.js';
        import {useBrandsStore} from '@/store/brands.js';
        import {useReferencesStore} from '@/store/references.js';

        import {useOffCanvasStore} from '@/store/offCanvas.js'
        import { storeToRefs } from 'pinia';
       
        const useDevices=useDevicesStore();
        const useBrands=useBrandsStore();
        const useReferences=useReferencesStore();
       
        const {devices}=storeToRefs(useDevices);
        const {brands}=storeToRefs(useBrands);
        const {references}=storeToRefs(useReferences);

        const {getDeviceById,addDevice,updateDevice}=useDevices;
        const {getBrands}=useBrands;
        const {getReferences}=useReferences

        const useOffCanvas=useOffCanvasStore();
        const {create,id,title,buttonText}=storeToRefs(useOffCanvas);

        
        //Variables Reactivas...


        const name=ref('');
        const serial=ref('');
        const description=ref('');
        const stateForm=ref('');
        const brandsId=ref('');
        const referencesId=ref('');

     
        
        //Funcionalidad del formulario.
        const formValidation=()=>{
            let flag=true;
            //Validación si hay algún campo vacío...
            if(name.value===''|| serial.value===''|| description.value==='' || stateForm.value==='' || brandsId.value==='' || referencesId===''){
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
           
        }
              
               
      
        const createItem=()=>{
                let stateBoolean=(stateForm.value==='true');
                const device={
                id:devices.value[devices.value.length-1]?.id+1 || 1,
                name:name.value,
                serial:serial.value,
                description:description.value,
                state:stateBoolean,
                brandsId:brandsId.value,
                referencesId:referencesId.value
                }
                console.log(stateForm.value)
                addDevice(device);
                name.value='';
                serial.value='';
                description.value='';
                stateForm.value='';
                brandsId.value='';
                referencesId.value='';
        }
        const updateItem=()=>{
            let stateBoolean=(stateForm.value==='true');
            const newDevice={
                id:id.value, 
                name:name.value,
                serial:serial.value,
                description:description.value,
                state:stateBoolean,
                barnsId:brandsId.value,
                referencesId:referencesId.value
            }
            // console.log(`Data que recojo del formulario: ${JSON.stringify(newBrand)}`);
            console.log(stateForm.value)
            updateDevice(id.value,newDevice);
        }
      

        //Este es el watch en composition API.
        watch(title,(newTitle,oldTitle)=>{
            
              let item=getDeviceById(id.value)
              if(item){
                name.value=item.name,
                serial.value=item.serial,
                description.value=item.description,
                stateForm.value=item.state,
                brandsId.value=item.brandsId,
                referencesId.value=item.referencesId
              }else{
                name.value='',
                serial.value='',
                description.value='',
                stateForm.value='',
                brandsId.value='',
                referencesId.value=''
              }
        });

        //Ciclos de vida del componente....
        onMounted(()=>{
            getBrands();
            getReferences();
        });
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
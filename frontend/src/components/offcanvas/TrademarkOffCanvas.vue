<template>
  
    <div class="offcanvas offcanvas-start text-bg-dark " tabindex="-1" id="offcanvasTrademark" aria-labelledby="offcanvasExampleLabel" ref="myOffCanvas">
      <div class="offcanvas-header">
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
       <div class="container-form">
          <div class="container body" id="registration-form">
            
            <div >
                <h2 class="mb-5 text-center">{{title}}</h2>
                <form @submit.prevent="processForm">
                    <div class="form-group mb-2">
                        <label for="name " >Nombre:</label>
                        <input type="text" class="form-control mt-2" id="name" placeholder="Ingrese el nombre" v-model="name">
                        <!-- <div  class="form-text text-danger" v-if="errorName">La marca que intenta registrar ya existe.</div> -->
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
        import {useBrandsStore} from '@/store/brands.js';
        import {useOffCanvasStore} from '@/store/offCanvas.js'
        import { storeToRefs } from 'pinia';
       
        
        


        const useBrands=useBrandsStore();
       
        const {brands}=storeToRefs(useBrands);
        const {getBrandById,addBrand,updateBrand}=useBrands;

        const useOffCanvas=useOffCanvasStore();
        const {create,id,title,buttonText}=storeToRefs(useOffCanvas);

        
        //Variables Reactivas...
        const name=ref('');
        // const errorName=ref(false);
        const myOffCanvas=ref(null);
        
        //const item=getBrandById(id.value)
              
       

        //Funcionalidad del formulario.
        const processForm=()=>{
            if(create.value){
                createItem();
            }else{
                updateItem();
            }
        }
        const createItem=()=>{
            let flag=brands.value.some(brand=>brand.name.toLowerCase()===name.value.toLowerCase())
            if(!flag && name.value!==''){
                // errorName.value=false
                const brand={
                id:brands.value[brands.value.length-1].id+1,
                name:name.value,
                }
                addBrand(brand);
                name.value='';
                // closeOffCanvas();
            }else{
                // errorName.value=true
                name.value='';
            }
            
        }
        const updateItem=()=>{
            const newBrand={
                id:id.value, //  Creo que esto es lo que genera el conflicto
                name:name.value
            }
            updateBrand(id.value,newBrand);
        }
        // const closeOffCanvas=()=>{
        //     // // Obtener referencia al offcanvas
        //     // const myOffcanvas = document.getElementById("offcanvasTrademark");

        //     // // Cerrar el offcanvas
        //     // // const offcanvas = new bootstrap.Offcanvas(myOffcanvas);
        //     // offcanvas.hide();
        //     const offcanvas = new bootstrap.Offcanvas(myOffCanvas.value);
        //     offcanvas.hide();
        // }

        //Este es el watch en composition API.
        watch(title,(newTitle,oldTitle)=>{
            
              let item=getBrandById(id.value)
              if(item){
                name.value=item.name
              }else{
                name.value=''
              }
        })
        
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
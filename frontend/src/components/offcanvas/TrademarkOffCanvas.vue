<template>
  
    <div class="offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="offcanvasTrademark" aria-labelledby="offcanvasExampleLabel" >
      <div class="offcanvas-header">
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
       <div class="container-form">
          <div class="container body" id="registration-form">
            
            <div >
                <h2 class="mb-5 text-center">{{title}}{{create}}</h2>
                <form @submit.prevent="processForm">
                    <div class="form-group mb-2">
                        <label for="name mb-5" >Nombre:</label>
                        <input type="text" class="form-control" id="name" placeholder="Ingrese el nombre" v-model="name">
                    </div>
                    
                    <div class="form-group mb-2 mt-5">
                        <button type="submit" class="btn btn-outline-secondary btn-lg w-100" data-bs-dismiss="offcanvas" aria-label="Close">Registrar</button>
                    </div>
                </form>
            </div>
          </div>
       </div>
        
      </div>
    </div>
    </template>
    
    <script setup>
        import {ref} from 'vue'
        import {useBrandsStore} from '@/store/brands.js';
        import {useOffCanvasStore} from '@/store/offCanvas.js'
        import { storeToRefs } from 'pinia';
       
        
        // import {openOffCanvas} from '../../helpers/openOffCanvas';


        const useBrands=useBrandsStore();
       
        const {brands}=storeToRefs(useBrands);
        const {getBrandById,addBrand,updateBrand}=useBrands;

        const useOffCanvas=useOffCanvasStore();
        const {create,title}=storeToRefs(useOffCanvas);

        
        //Variables Reactivas...
        const name=ref('');
        //Propiedades Computadas...
       

        //Funcionalidad del formulario.
        const processForm=()=>{
            const brand={
                id:brands.value[brands.value.length-1].id+1,
                name:name.value,
            }
            addBrand(brand);
            name.value='';
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
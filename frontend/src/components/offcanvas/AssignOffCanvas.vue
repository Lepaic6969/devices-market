<template>
  
    <div class="offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="offcanvasAssign" aria-labelledby="offcanvasExampleLabel">
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
                        <label  class="mb-2">Empleado:</label>
                        <SelectComponent :data="employees" v-model="employeesId"/>
                    </div>
     
                    <div class="form-group mb-2">
                        <label class="mb-2">Equipo:</label>
                        <SelectComponent :data="devices" v-model="devicesId"/>
                    </div>
                    <div class="form-group mb-2">
                        <label for="note" class="mb-2 " >Observación:</label>
                        <input type="text" id="note" class="form-control w-100" v-model="note">
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
    import {useRecordsStore} from '@/store/records.js';
    import {useEmployeesStore} from '@/store/employees.js';
    import {useDevicesStore} from '@/store/devices.js';

    import {useOffCanvasStore} from '@/store/offCanvas.js'
    import { storeToRefs } from 'pinia';
    
    
    const useRecords=useRecordsStore();
    const useEmployees=useEmployeesStore();
    const useDevices=useDevicesStore();


    
    const {records}=storeToRefs(useRecords);
    const {employees}=storeToRefs(useEmployees);
    const {devices}=storeToRefs(useDevices);

    const {getRecordById,addRecord,updateRecord}=useRecords;
    const {getEmployees}=useEmployees;
    const {getDevices}=useDevices;


    const useOffCanvas=useOffCanvasStore();
    const {create,id,title,buttonText}=storeToRefs(useOffCanvas);

 
    
    //Variables Reactivas...
    const employeesId=ref('');
    const devicesId=ref('');
    const note=ref('');

    
    
    //Funcionalidad del formulario.
    const formValidation=()=>{
        let flag=true;
        //Validación si hay algún campo vacío...
        if(employeesId.value===''|| devicesId.value===''|| note.value===''){
            console.log("No validó bien el formulario")
            flag=false
        }
        
        return flag;

    }
    const processForm=()=>{
        console.log("Entró en el process form")
        const correctForm=formValidation();
        if(correctForm){
            (create.value)?createItem():updateItem();
        }
        
    }
             
    const createItem=()=>{
            const record={
                id:records.value[records.value.length-1]?.id+1 || 1,
                employeesId:employeesId.value,
                devicesId:devicesId.value,
                note:note.value,
            }
            console.log(`Esta es la data que sacamos del formulario... ${JSON.stringify(record)}`)
            addRecord(record);
            employeesId.value='';
            devicesId.value='';
            note.value='';
    }
    const updateItem=()=>{
        const newRecord={
            id:id.value, 
            employeesId:employeesId.value,
            devicesId:devicesId.value,
            note:note.value,
        }
        // console.log(`Data que recojo del formulario: ${JSON.stringify(newBrand)}`);
        updateRecord(id.value,newRecord);
    }
    

    //Este es el watch en composition API.
    watch(title,(newTitle,oldTitle)=>{
        
            let item=getRecordById(id.value)
            if(item){
                employeesId.value=item.employeesId;
                devicesId.value=item.devicesId;
                note.value=item.note;
            }else{
                employeesId.value='';
                devicesId.value='';
                note.value='';
            }
    });

    //Ciclos de vida del componente....
    onMounted(()=>{
        getEmployees();
        getDevices();
    });
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
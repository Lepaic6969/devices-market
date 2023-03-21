import {defineStore} from 'pinia';
//Importamos los helpers de las peticiones HTTP.
import {getData,addData,updateData,deleteData} from '../helpers/requests.js';

const URL= 'https://devices-market-production.up.railway.app/api/v1/employee';
export const  useEmployeesStore=defineStore('employees',{
    state:()=>({
        employees:[],
    }),
    actions:{
        async getEmployees(){
           this.employees=await getData(URL);
           this.sortById();
        },
        
        getEmployeeById(id){
            const index=this.employees.map(el=>el.id).indexOf(id);
            return this.employees[index]; 
        },
        
        addEmployee(employee){
            this.employees.push(employee);
            //Petición HTTP...
           
            const data={
                name:employee.name,
                lastName:employee.lastName,
                address:employee.address,
                phone:employee.phone,
                email:employee.email
            }
            // console.log(data)
            addData(URL,data); //POST
            
        },
        updateEmployee(id,newEmployee){ 
            const index=this.employees.map(el=>el.id).indexOf(id); //El índice que debo alterar.
            this.employees[index]=newEmployee;
            //Petición HTTP...
            const url=`${URL}/${id}`;
            const data={
                name:newEmployee.name,
                lastName:newEmployee.lastName,
                address:newEmployee.address,
                phone:newEmployee.phone,
                email:newEmployee.email
            }
            // console.log(`Data que se envía al backend: ${JSON.stringify(data)}`);
            updateData(url,data); ///PUT
        },
        deleteEmployee(id){
            const index=this.employees.map(el=>el.id).indexOf(id); //El índice que debo borrar.
            this.employees.splice(index,1);
            //Petición HTTP...
            const url=`${URL}/${id}`;
            deleteData(url);
        },
        sortById(){
            this.employees.sort((a,b)=>a.id-b.id);
        }

    }
    
});
import {defineStore} from 'pinia';
//Importamos los helpers de las peticiones HTTP.
import {getData,addData,updateData,deleteData} from '../helpers/requests.js';

const URL= 'http://localhost:3000/api/v1/registerDevice';
export const  useRecordsStore=defineStore('record',{
    state:()=>({
        records:[],
    }),
    actions:{
        async getRecords(){
           this.records=await getData(URL);
           this.sortById();
        },
        
        getRecordById(id){
            const index=this.records.map(el=>el.id).indexOf(id);
            return this.records[index]; 
        },
        
        addRecord(record){
            this.records.push(record);
            //Petición HTTP...
            const data={
                note:record.note,
                employeesId: record.employeesId,
                devicesId:record.devicesId
            }
            console.log(`Data que va hacia el backend: ${JSON.stringify(data)}`);
            addData(URL,data); //POST
            
        },
        updateRecord(id,newRecord){ 
            const index=this.records.map(el=>el.id).indexOf(id); //El índice que debo alterar.
            this.records[index]=newRecord;
            //Petición HTTP...
            const url=`${URL}/${id}`;
            const data={
                note:newRecord.note,
                employeesId: newRecord.employeesId,
                deviceId:newRecord.deviceId
            }
            // console.log(`Data que se envía al backend: ${JSON.stringify(data)}`);
            updateData(url,data); ///PUT
        },
        deleteRecord(id){
            const index=this.records.map(el=>el.id).indexOf(id); //El índice que debo borrar.
            this.records.splice(index,1);
            //Petición HTTP...
            const url=`${URL}/${id}`;
            deleteData(url);
        },
        sortById(){
            this.records.sort((a,b)=>a.id-b.id);
        }

    }
    
});
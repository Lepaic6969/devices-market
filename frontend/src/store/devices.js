import {defineStore} from 'pinia';
//Importamos los helpers de las peticiones HTTP.
import {getData,addData,updateData,deleteData} from '../helpers/requests.js';

const URL= 'https://devices-market-production.up.railway.app/api/v1/device';
export const  useDevicesStore=defineStore('devices',{
    state:()=>({
        devices:[],
    }),
    actions:{
        async getDevices(){
           this.devices=await getData(URL);
           this.sortById();
        },
        
        getDeviceById(id){
            const index=this.devices.map(el=>el.id).indexOf(id);
            return this.devices[index]; 
        },
        
        addDevice(device){
            this.devices.push(device);
            //Petición HTTP...
            const data={
                name:device.name,
                serial:device.serial,
                description:device.description,
                state:device.state,
                brandsId:device.brandsId,
                referencesId:device.referencesId
            }
            console.log(`Data que va hacia el backend: ${JSON.stringify(data)}`);
            addData(URL,data); //POST
            
        },
        updateDevice(id,newDevice){ 
            const index=this.devices.map(el=>el.id).indexOf(id); //El índice que debo alterar.
            this.devices[index]=newDevice;
            //Petición HTTP...
            const url=`${URL}/${id}`;
            const data={
                name:newDevice.name,
                serial:newDevice.serial,
                description:newDevice.description,
                state:newDevice.state,
                brandsId:newDevice.brandsId,
                referencesId:newDevice.referencesId
            }
            // console.log(`Data que se envía al backend: ${JSON.stringify(data)}`);
            updateData(url,data); ///PUT
        },
        deleteDevice(id){
            const index=this.devices.map(el=>el.id).indexOf(id); //El índice que debo borrar.
            this.devices.splice(index,1);
            //Petición HTTP...
            const url=`${URL}/${id}`;
            deleteData(url);
        },
        sortById(){
            this.devices.sort((a,b)=>a.id-b.id);
        }

    }
    
});
import {defineStore} from 'pinia';
//Importamos los helpers de las peticiones HTTP.
import {getData,addData,updateData,deleteData} from '../helpers/requests.js';

const URL= 'https://devices-market-production.up.railway.app/api/v1/reference';
export const  useReferencesStore=defineStore('references',{
    state:()=>({
        references:[],
        // brands:[
        //     {
        //         "id": 1,
        //         "name": "Apple"
        //       },
        //       {
        //         "id": 2,
        //         "name": "Huawei"
        //       },
        //       {
        //         "id": 3,
        //         "name": "Samsung"
        //       }
        // ],
        
    }),
    actions:{
        async getReferences(){
           this.references=await getData(URL);
           this.sortById();
        },
        
        getReferenceById(id){
            const index=this.references.map(el=>el.id).indexOf(id);
            return this.references[index]; 
        },
        
        addReference(reference){
            this.references.push(reference);
            //Petición HTTP...
            const data={name:reference.name}
            addData(URL,data); //POST
            
        },
        updateReference(id,newReference){ //newBrand es un objeto.
            const index=this.references.map(el=>el.id).indexOf(id); //El índice que debo alterar.
            this.references[index]=newReference;
            //Petición HTTP...
            const url=`${URL}/${id}`;
            const data={name:newReference.name};
            updateData(url,data); ///PUT
        },
        deleteReference(id){
            const index=this.references.map(el=>el.id).indexOf(id); //El índice que debo borrar.
            this.references.splice(index,1);
            //Petición HTTP...
            const url=`${URL}/${id}`;
            deleteData(url);
        },
        sortById(){
            this.references.sort((a,b)=>a.id-b.id);
        }

    }
    
});
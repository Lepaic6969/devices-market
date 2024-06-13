import {defineStore} from 'pinia';
//Importamos los helpers de las peticiones HTTP.
import {getData,addData,updateData,deleteData} from '../helpers/requests.js';

const URL= 'http://localhost:3000/api/v1/brands';
export const  useBrandsStore=defineStore('brands',{
    state:()=>({
        brands:[],
    }),
    actions:{
        async getBrands(){
           this.brands=await getData(URL);
           this.sortById();
        },
        
        getBrandById(id){
            const index=this.brands.map(el=>el.id).indexOf(id);
            return this.brands[index]; 
        },
        
        addBrand(brand){
            this.brands.push(brand);
            //Petición HTTP...
            const data={name:brand.name}
            addData(URL,data); //POST
            
        },
        // async addBrand(brand){
        //     try{
        //             //Petición HTTP...
        //         const data={name:brand.name}
        //         await addData(URL,data); //POST
        //         this.brands.push(brand);
        //     }catch(err){
        //         console.log(err);
        //     }
        // },
        updateBrand(id,newBrand){ //newBrand es un objeto.
            const index=this.brands.map(el=>el.id).indexOf(id); //El índice que debo alterar.
            this.brands[index]=newBrand;
            //Petición HTTP...
            const url=`${URL}/${id}`;
            const data={name:newBrand.name};
            updateData(url,data); ///PUT
        },
        deleteBrand(id){
            const index=this.brands.map(el=>el.id).indexOf(id); //El índice que debo borrar.
            this.brands.splice(index,1);
            //Petición HTTP...
            const url=`${URL}/${id}`;
            deleteData(url);
        },
        sortById(){
            this.brands.sort((a,b)=>a.id-b.id);
        }

    }
    
});
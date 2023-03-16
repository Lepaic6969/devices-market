import {defineStore} from 'pinia';


export const  useBrandsStore=defineStore('home',{
    state:()=>({
        brands:[
            {
                "id": 1,
                "name": "Apple"
              },
              {
                "id": 2,
                "name": "Huawei"
              },
              {
                "id": 3,
                "name": "Samsung"
              }
        ]
    }),
    actions:{
        getBrands(){
           //TODO: Esta es la acción que hace la petición http para traer toda la data, la idea es ejecutar esta acción en algún ciclo de vida del componente.
        },
        
        getBrandById(id){
            const index=this.brands.map(el=>el.id).indexOf(id);
            return this.brands[id]; 
        },
        //***********TODO: OJO QUE ESTOS NECESITAN ACTUALIZACIONES DE LA DATA EN EL BACKEND*********************
        addBrand(brand){
            this.brands.push(brand); //Brand es un objeto.
        },
        updateBrand(id,newBrand){ //newBrand es un objeto.
            const index=this.brands.map(el=>el.id).indexOf(id); //El índice que debo alterar.
            this.brands[index]=newBrand;
        },
        deleteBrand(id){
            const index=this.brands.map(el=>el.id).indexOf(id); //El índice que debo borrar.
            this.brands.splice(index,1);

        }
    },
    getters:{
        
    }
});
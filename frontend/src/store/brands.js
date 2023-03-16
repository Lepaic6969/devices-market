import {defineStore} from 'pinia';
export const  useBrandsStore=defineStore('brands',{
    state:()=>({
        count:0
    }),
    actions:{
        increment(){
            this.count++
        }
    },
    getters:{
        double:(state)=>{
            return state.count*2
        }
    }
});
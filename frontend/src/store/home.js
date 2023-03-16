import {defineStore} from 'pinia';
export const  useHomeStore=defineStore('home',{
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
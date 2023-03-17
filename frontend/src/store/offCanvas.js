import {defineStore} from 'pinia';
export const  useOffCanvasStore=defineStore('offcanvas',{
    state:()=>({
        create:true
    }),
    actions:{
        update(){
            this.create=false
            console.log(this.create)
        },
        create(){
            this.create=true
            console.log(this.create)
        }
    },
    getters:{
        title:(state)=>{
            return (state.create)?'Registrar Marca':'Actualizar Marca'
        }
    }
});
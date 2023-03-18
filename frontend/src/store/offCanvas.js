import {defineStore} from 'pinia';
export const  useOffCanvasStore=defineStore('offcanvas',{
    state:()=>({
        create:true,
        id:null,
        name:'',
        
    }),
    actions:{
        updateAction(id,name){
            this.create=false
            this.id=id
            this.name=name
        },
        createAction(){
            this.create=true
            this.id=null
           
        },
    },
    getters:{
        title:(state)=>{
            return (state.create)?'Registrar Marca':`Actualizar Marca ${state.name}`;
        },
        buttonText:(state)=>{
            return (state.create)?'Registrar':'Actualizar';
        }
    }
});
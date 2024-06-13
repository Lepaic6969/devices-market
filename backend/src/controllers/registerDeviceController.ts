import { Request, Response } from 'express';
import prisma from '../models/prisma'; //Importo el objeto que me permite comunicarme con la BD

export const createRegister=async(req:Request,res:Response):Promise<void>=>{
    const {employeesId,devicesId}=req.body;
    if(!employeesId || !devicesId){
        //400 -> Bad Request
        res.status(400).json({message:'¡El Id del empleado y el Id del dispositivo son obligatorios!'});
        return;
    }
    try{
        const newRegister:object=await prisma.registerDevice.create(
            {
                data:{
                    employeesId,
                    devicesId
                }
            }
        );
        //201 -> Created
        res.status(201).json(newRegister);
    }catch(error:any){
        if(error?.code==="P2003"){
            //400 -> Bad Request
            res.status(400).json({message:'Hay un problema con las relaciones de esta tabla, por lo que no se puede crear el nuevo registro'});
            return
        }
        //500 -> Error interno del servidor
        res.status(500).json({message:error.message});
    }
}



export const getAllRegisters=async(req:Request,res:Response):Promise<void>=>{
    try{
        const registers:object=await prisma.registerDevice.findMany();
        //200 -> Petición éxitosa
        res.status(200).json(registers);
    }catch(error:any){
        //500 -> Error interno del servidor
        res.status(500).json({message:error.message});
    }
}

export const getRegisterById=async(req:Request,res:Response):Promise<void>=>{
    const registerId:number=parseInt(req.params.id); //El where de la consulta necesita un dato tipo number
    try{
        const register:object|null=await prisma.registerDevice.findUnique({
            where:{
                id:registerId
            }
        });
        //Valido que la marca exista
        if(!register){
            //404->Not Found
            res.status(404).json({message:`El registro con id:${registerId}, no existe.`});
            return
        }
        //Si llega hasta aquí quiere decir que todo está bien
        //200 -> Petición exitosa
        res.status(200).json(register);

    }catch(error:any){
        //500 -> Error interno del servidor
        res.status(500).json({message:error.message});
    }
}


export const updateRegister=async(req:Request,res:Response):Promise<void>=>{
    const registerId:number=parseInt(req.params.id);//Hago el casting para poder realizar la consulta en la BD.
    const dataToUpdate:object={...req.body};

    try{
        const register=await prisma.registerDevice.update(
            {
                where:{
                    id:registerId
                },
                data:dataToUpdate
            }
        );
        //200 -> Petición exitosa
        res.status(200).json(register);
    }catch(error:any){
        if(error?.code==='P2025'){
            //400->Not Found
            res.status(400).json({message:`El registro de id:${registerId} no existe, por tanto no se puede editar.`});
            return
        }
        if(error?.code==="P2003"){
            //400 -> Bad Request
            res.status(400).json({message:'Hay un problema con las relaciones de esta tabla, por lo que no se puede crear el nuevo registro'});
            return
        }
        //500 -> Error interno del servidor
        res.status(500).json({message:error.message});
    }
}


export const deleteRegister=async(req:Request,res:Response):Promise<void>=>{
    const registerId:number=parseInt(req.params.id); //Hago el casting para poder realizar la consulta en la BD.
    try{
        const registerDeleted=await prisma.registerDevice.delete(
            {
                where:{
                    id:registerId
                }
            }
        );
        //200 -> Petición Exitosa
        res.status(200).json(registerDeleted);

    }catch(error:any){
        if(error?.code==='P2025'){
            //400->Not Found
            res.status(400).json({message:`El registro de id:${registerId} no existe, por tanto no se puede eliminar.`});
            return
        }
        //500 -> Error interno del servidor
        res.status(500).json({message:error.message});
    }
}


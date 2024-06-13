import { Request, Response } from 'express';
import prisma from '../models/prisma'; //Importo el objeto que me permite comunicarme con la BD

export const createDevice=async(req:Request,res:Response):Promise<void>=>{
    const {name,serial,description,state,brandsId,referencesId}=req.body;
    if(!name || !serial || !description ||!state || !brandsId || !referencesId){
        //400 -> Bad Request
        res.status(400).json({message:'¡El nombre,serial,description,state,brandsId y referencesId son campos obligatorios!'});
        return;
    }
    try{
        const newDevice:object=await prisma.device.create(
            {
                data:{
                    name,
                    serial,
                    description,
                    state,
                    brandsId,
                    referencesId
                }
            }
        );
        //201 -> Created
        res.status(201).json(newDevice);
    }catch(error:any){
        if(error?.code==="P2003"){
            //400 -> Bad Request
            res.status(400).json({message:'Hay un problema con las relaciones de esta tabla, por lo que no se puede crear el nuevo dispositivo'});
            return
        }
        //500 -> Error interno del servidor
        res.status(500).json({message:error.message});
    }
}


export const getAllDevices=async(req:Request,res:Response):Promise<void>=>{
    try{
        const devices:object=await prisma.device.findMany();
        //200 -> Petición éxitosa
        res.status(200).json(devices);
    }catch(error:any){
        //500 -> Error interno del servidor
        res.status(500).json({message:error.message});
    }
}


export const getDeviceById=async(req:Request,res:Response):Promise<void>=>{
    const deviceId:number=parseInt(req.params.id); //El where de la consulta necesita un dato tipo number
    try{
        const device:object|null=await prisma.device.findUnique({
            where:{
                id:deviceId
            }
        });
        //Valido que la marca exista
        if(!device){
            //404->Not Found
            res.status(404).json({message:`El dispositivo con id:${deviceId}, no existe.`});
            return
        }
        //Si llega hasta aquí quiere decir que todo está bien
        //200 -> Petición exitosa
        res.status(200).json(device);

    }catch(error:any){
        //500 -> Error interno del servidor
        res.status(500).json({message:error.message});
    }
}

export const updateDevice=async(req:Request,res:Response):Promise<void>=>{
    const deviceId:number=parseInt(req.params.id);//Hago el casting para poder realizar la consulta en la BD.
    const dataToUpdate:object={...req.body};

    try{
        const device=await prisma.device.update(
            {
                where:{
                    id:deviceId
                },
                data:dataToUpdate
            }
        );
        //200 -> Petición exitosa
        res.status(200).json(device);
    }catch(error:any){
        console.log(error.code);
        if(error?.code==='P2025'){
            //400->Not Found
            res.status(400).json({message:`El dispositivo de id:${deviceId} no existe, por tanto no se puede editar.`});
            return
        }
        if(error?.code==='P2002'){
            //400->Not Found
            res.status(400).json({message:`Recuerde que algunos campos de esta tabla son únicos como el serial.`});
            return
        }
        if(error?.code==="P2003"){
            //400 -> Bad Request
            res.status(400).json({message:'Hay un problema con las relaciones de esta tabla, por lo que no se puede realizar la actualización del dispositivo'});
            return
        }
        //500 -> Error interno del servidor
        res.status(500).json({message:error.message});
    }
}

export const deleteDevice=async(req:Request,res:Response):Promise<void>=>{
    const deviceId:number=parseInt(req.params.id); //Hago el casting para poder realizar la consulta en la BD.
    try{
        const deviceDeleted=await prisma.device.delete(
            {
                where:{
                    id:deviceId
                }
            }
        );
        //200 -> Petición Exitosa
        res.status(200).json(deviceDeleted);

    }catch(error:any){
        if(error?.code==='P2025'){
            //400->Not Found
            res.status(400).json({message:`El dispositivo de id:${deviceId} no existe, por tanto no se puede eliminar.`});
            return
        }
        //500 -> Error interno del servidor
        res.status(500).json({message:error.message});
    }
}
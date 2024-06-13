import { Request, Response } from 'express';
import prisma from '../models/prisma'; //Importo el objeto que me permite comunicarme con la BD

export const createReference=async(req:Request,res:Response):Promise<void>=>{
    const {name}=req.body;
    if(!name){
        //400 -> Bad Request
        res.status(400).json({message:'¡El nombre de la referencia es obligatorio!'});
        return;
    }
    try{
        const newReference:object=await prisma.reference.create(
            {
                data:{
                    name
                }
            }
        );
        //201 -> Created
        res.status(201).json(newReference);
    }catch(error:any){
        //500 -> Error interno del servidor
        res.status(500).json({message:error.message});
    }
}

export const getAllReferences=async(req:Request,res:Response):Promise<void>=>{
    try{
        const references:object=await prisma.reference.findMany();
        //200 -> Petición éxitosa
        res.status(200).json(references);
    }catch(error:any){
        //500 -> Error interno del servidor
        res.status(500).json({message:error.message});
    }
}

export const getReferenceById=async(req:Request,res:Response):Promise<void>=>{
    const referenceId:number=parseInt(req.params.id); //El where de la consulta necesita un dato tipo number
    try{
        const reference:object|null=await prisma.reference.findUnique({
            where:{
                id:referenceId
            }
        });
        //Valido que la marca exista
        if(!reference){
            //404->Not Found
            res.status(404).json({message:`La referencia con id:${referenceId} no existe.`});
            return
        }
        //Si llega hasta aquí quiere decir que todo está bien
        //200 -> Petición exitosa
        res.status(200).json(reference);

    }catch(error:any){
        //500 -> Error interno del servidor
        res.status(500).json({message:error.message});
    }
}

export const updateReference=async(req:Request,res:Response):Promise<void>=>{
    const referenceId:number=parseInt(req.params.id);//Hago el casting para poder realizar la consulta en la BD.
    const dataToUpdate:object={...req.body};

    try{
        const reference=await prisma.reference.update(
            {
                where:{
                    id:referenceId
                },
                data:dataToUpdate
            }
        );
        //200 -> Petición exitosa
        res.status(200).json(reference);
    }catch(error:any){
        if(error?.code==='P2025'){
            //400->Not Found
            res.status(400).json({message:`La referencia de id:${referenceId} no existe, por tanto no se puede editar.`});
            return
        }
        //500 -> Error interno del servidor
        res.status(500).json({message:error.message});
    }
}

export const deleteReference=async(req:Request,res:Response):Promise<void>=>{
    const referenceId:number=parseInt(req.params.id); //Hago el casting para poder realizar la consulta en la BD.
    try{
        const referenceDeleted=await prisma.reference.delete(
            {
                where:{
                    id:referenceId
                }
            }
        );
        //200 -> Petición Exitosa
        res.status(200).json(referenceDeleted);

    }catch(error:any){
        if(error?.code==='P2025'){
            //400->Not Found
            res.status(400).json({message:`La referencia de id:${referenceId} no existe, por tanto no se puede eliminar.`});
            return
        }
        //500 -> Error interno del servidor
        res.status(500).json({message:error.message});
    }
}
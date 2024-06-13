import { Request, Response } from 'express';
import prisma from '../models/prisma'; //Importo el objeto que me permite comunicarme con la BD

export const createBrand=async(req:Request,res:Response):Promise<void>=>{
    const {name}=req.body;
    if(!name){
        //400 -> Bad Request
        res.status(400).json({message:'¡El nombre de la marca es obligatorio!'});
        return;
    }
    try{
        const newBrand:object=await prisma.brand.create(
            {
                data:{
                    name
                }
            }
        );
        //201 -> Created
        res.status(201).json(newBrand);
    }catch(error:any){
        //500 -> Error interno del servidor
        res.status(500).json({message:error.message});
    }
}

export const getAllBrands=async(req:Request,res:Response):Promise<void>=>{
    try{
        const brands:object=await prisma.brand.findMany();
        //200 -> Petición éxitosa
        res.status(200).json(brands);
    }catch(error:any){
        //500 -> Error interno del servidor
        res.status(500).json({message:error.message});
    }
}

export const getBrandById=async(req:Request,res:Response):Promise<void>=>{
    const brandId:number=parseInt(req.params.id); //El where de la consulta necesita un dato tipo number
    try{
        const brand:object|null=await prisma.brand.findUnique({
            where:{
                id:brandId
            }
        });
        //Valido que la marca exista
        if(!brand){
            //404->Not Found
            res.status(404).json({message:`La marca con id:${brandId} no existe.`});
            return
        }
        //Si llega hasta aquí quiere decir que todo está bien
        //200 -> Petición exitosa
        res.status(200).json(brand);

    }catch(error:any){
        //500 -> Error interno del servidor
        res.status(500).json({message:error.message});
    }
}

export const updateBrand=async(req:Request,res:Response):Promise<void>=>{
    const brandId:number=parseInt(req.params.id); //Hago el casting para poder realizar la consulta en la BD.
    const dataToUpdate:object={...req.body};

    try{
        const brand=await prisma.brand.update(
            {
                where:{
                    id:brandId
                },
                data:dataToUpdate
            }
        );
        //200 -> Petición exitosa
        res.status(200).json(brand);
    }catch(error:any){
        if(error?.code==='P2025'){
            //400->Not Found
            res.status(400).json({message:`La marca de id:${brandId} no existe, por tanto no se puede editar.`});
            return
        }
        //500 -> Error interno del servidor
        res.status(500).json({message:error.message});
    }
}

export const deleteBrand=async(req:Request,res:Response):Promise<void>=>{
    const brandId:number=parseInt(req.params.id); //Hago el casting para poder realizar la consulta en la BD.
    try{
        const brandDeleted=await prisma.brand.delete(
            {
                where:{
                    id:brandId
                }
            }
        );
        //200 -> Petición Exitosa
        res.status(200).json(brandDeleted);

    }catch(error:any){
        if(error?.code==='P2025'){
            //400->Not Found
            res.status(400).json({message:`La marca de id:${brandId} no existe, por tanto no se puede eliminar.`});
            return
        }
        //500 -> Error interno del servidor
        res.status(500).json({message:error.message});
    }
}
import { Request, Response } from 'express';
import prisma from '../models/prisma'; //Importo el objeto que me permite comunicarme con la BD

export const createEmployee=async(req:Request,res:Response):Promise<void>=>{
    const {name,lastName,phone,email}=req.body;
    if(!name || !lastName || !phone ||!email){
        //400 -> Bad Request
        res.status(400).json({message:'¡El nombre,apellido,teléfono e email son campos obligatorios!'});
        return;
    }
    try{
        const newEmployee:object=await prisma.employee.create(
            {
                data:{
                    name,
                    lastName,
                    phone,
                    email
                }
            }
        );
        //201 -> Created
        res.status(201).json(newEmployee);
    }catch(error:any){
        if(error?.code==="P2002"){
            //400 -> Bad Request
            res.status(400).json({message:'El correo ya existe en la base de datos, no se pudo crear el nuevo registro.'});
            return
        }
        //500 -> Error interno del servidor
        res.status(500).json({message:error.message});
    }
}

export const getAllEmployees=async(req:Request,res:Response):Promise<void>=>{
    try{
        const employees:object=await prisma.employee.findMany();
        //200 -> Petición éxitosa
        res.status(200).json(employees);
    }catch(error:any){
        //500 -> Error interno del servidor
        res.status(500).json({message:error.message});
    }
}

export const getEmployeeById=async(req:Request,res:Response):Promise<void>=>{
    const employeeId:number=parseInt(req.params.id); //El where de la consulta necesita un dato tipo number
    try{
        const employee:object|null=await prisma.employee.findUnique({
            where:{
                id:employeeId
            }
        });
        //Valido que la marca exista
        if(!employee){
            //404->Not Found
            res.status(404).json({message:`El empleado con id:${employeeId}, no existe.`});
            return
        }
        //Si llega hasta aquí quiere decir que todo está bien
        //200 -> Petición exitosa
        res.status(200).json(employee);

    }catch(error:any){
        //500 -> Error interno del servidor
        res.status(500).json({message:error.message});
    }
}

export const updateEmployee=async(req:Request,res:Response):Promise<void>=>{
    const employeeId:number=parseInt(req.params.id);//Hago el casting para poder realizar la consulta en la BD.
    const dataToUpdate:object={...req.body};

    try{
        const employee=await prisma.employee.update(
            {
                where:{
                    id:employeeId
                },
                data:dataToUpdate
            }
        );
        //200 -> Petición exitosa
        res.status(200).json(employee);
    }catch(error:any){
        if(error?.code==='P2025'){
            //400->Not Found
            res.status(400).json({message:`El empleado de id:${employeeId} no existe, por tanto no se puede editar.`});
            return
        }
        //500 -> Error interno del servidor
        res.status(500).json({message:error.message});
    }
}

export const deleteEmployee=async(req:Request,res:Response):Promise<void>=>{
    const employeeId:number=parseInt(req.params.id); //Hago el casting para poder realizar la consulta en la BD.
    try{
        const employeeDeleted=await prisma.employee.delete(
            {
                where:{
                    id:employeeId
                }
            }
        );
        //200 -> Petición Exitosa
        res.status(200).json(employeeDeleted);

    }catch(error:any){
        if(error?.code==='P2025'){
            //400->Not Found
            res.status(400).json({message:`El empleado de id:${employeeId} no existe, por tanto no se puede eliminar.`});
            return
        }
        //500 -> Error interno del servidor
        res.status(500).json({message:error.message});
    }
}
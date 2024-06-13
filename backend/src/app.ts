import {config} from 'dotenv';
config();
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

//Aquí debo importar las rutas de mi api rest
import brandRoutes from './routes/brandRoutes';
import referenceRoutes from './routes/referenceRoutes';
import employeeRoutes from './routes/employeeRoutes';
import deviceRoutes from './routes/deviceRoutes';
import registerDeviceRoutes from './routes/registerDeviceRoutes';

const app=express();

//Agregano los middlewares
app.use(express.json());

//Agrego los paquetes de terceros
app.use(morgan('dev'));
app.use(cors());

//Aquí debo agregar las rutas que importé previamente
app.use("/api/v1/brands",brandRoutes);
app.use("/api/v1/references",referenceRoutes);
app.use("/api/v1/employees",employeeRoutes);
app.use("/api/v1/devices",deviceRoutes);
app.use("/api/v1/registerDevice",registerDeviceRoutes);


export default app;


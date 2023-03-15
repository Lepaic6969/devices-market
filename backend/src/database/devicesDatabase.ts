// Description: This file contains the database connection
// Author: Sebastián Gámez Ariza

// There's importing the environment variables
import dotenv from 'dotenv';
dotenv.config();

// There's importing the ORM
import {Sequelize} from 'sequelize';

// Getting the db url through environment variables
const DB_URL: string = process.env.DB_URL!;

// There's connecting the db
const sequelize = new Sequelize(DB_URL);

// There's exporting the db
export default sequelize;

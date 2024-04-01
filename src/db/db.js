import mongoose from "mongoose";
import { DB_NAME } from '../constants.js';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const dbCon = async () => {
    try {
        const conInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`db connected with: ${conInstance.connection.host}`);
    } catch (err) {
        console.error(err);
    }
}

export default dbCon;

import mongoose from "mongoose";
import { createDummyData } from "./dummy";

export const connectToDB = async() => {

    const connection = {};

    try{
        if(connection.isConnected) return;
        const db = await mongoose.connect(process.env.MONGO);
        connection.isConnected = db.connections[0].readyState;
        await createDummyData();
    }
    catch(error){
        throw new Error(error);
    }
};
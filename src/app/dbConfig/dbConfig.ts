import { error } from "console";
import mongoose, { mongo } from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection

        connection.on('connected', () => {
            console.log('mangodb connected');
        })
        connection.on('error', (err) => {
            console.log('mangodb connection error, please make sure that mangodb connection is on and running'+ err);
            process.exit()

        })
    }
    catch () {
        console.log('something went wrong in connecting to DB ');
        console.log(error)
    }

}
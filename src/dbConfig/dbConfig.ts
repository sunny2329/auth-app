import mongoose from 'mongoose';


export async function connect(){
    try {
        mongoose.connect(process.env.mongo_url!);
        const connection = mongoose.connection;
        connection.once('connected',() => {
            console.log('MongoDB connected successfully');
        });
        connection.on('error',(err) => {
            console.log('MongoDB connection error.Please make sure MongoDB is running' + err);
        })
    } catch (error) {
        console.log(error);
    }
}
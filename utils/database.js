import mongoose from "mongoose";

let isConnected = false;
export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log('Mongo db is already connected');
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        })
        isConnected = true;
        console.log('Mongo db connected');
    } catch (error) {
        console.log('Error connecting to the database:', error);
    }
}
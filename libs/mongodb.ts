import mongoose from 'mongoose';

let isConnected: boolean = false;

const connectMongoDB = async (): Promise<void> => {
    if (isConnected) {
        console.log("Already connected to MongoDB.");
        return;
    }

    const mongoUri = process.env.MONGODB_URI || '';
    if (!mongoUri) {
        console.error("MongoDB connection URI is not defined.");
        return;
    }

    try {
        await mongoose.connect(mongoUri || '')
        isConnected = true;
        console.log("Connected to MongoDB.");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

export default connectMongoDB;

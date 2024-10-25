import mongoose from "mongoose";

const connectToMongoDb = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/");
        console.log("connected to mongo db")
    } catch (error) {
        console.log("Error to connecting to mongodb", error.message) 
    }
};
export default connectToMongoDb;
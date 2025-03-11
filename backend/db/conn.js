import mongoose from "mongoose";


export const connection = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.DB);
        console.log('connected successfully');
        
    } catch (error) {
        console.error(error);
        process.exit(1);

        
    }
}
import  jwt  from "jsonwebtoken";
import { User } from "../db/models/user.model.js";


export const prtRoute = async(req,res,next)=>{
    try {
        const token = req.cookies['jwt'];

        if(!token){
            return res.status(401).json({ success: false, message: "no token provided " });

        }


        const decoded = jwt.verify(token,process.env.JWTSECRET);

        const user = await User.findById(decoded.userId).select('-password');

        if(!user){
            return res.status(404).json({ success: false, message: "yser not found" });

        }


        req.user= user; 
        next()
    } catch (error) {
        console.log("error protectroute ", error.message);

        if(error.name=== "TokenExpiredError"){
            return res.status(401).json({ success: false, message:"token expired" });

        }
        if(error.name ==="JsonWebTokenError"){
            return res.status(401).json({ success: false, message: "invalid token" });

        }

        return res.status(500).json({ success: false, message: "internal server error" });

        
    }
}
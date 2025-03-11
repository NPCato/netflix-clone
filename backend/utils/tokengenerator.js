import jwt from 'jsonwebtoken'



export const tokenGene = async(userId,res)=>{
    const token= jwt.sign({userId},process.env.JWTSECRET,{expiresIn:"30d"});

    res.cookie("jwt",token,{
        maxAge:30*24*3600*1000,
        httpOnly:true,
        sameSite:'strict',
        secure: process.env.NODE_ENV !== "development",


    })

    return token;
}
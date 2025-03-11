import express from 'express'
import dotenv from 'dotenv'
import authRoute from './routes/auth.route.js';
import mediaRoute from './routes/media.route.js'
import searchRoute from './routes/search.route.js'
import path from 'path'
import cookieParser from 'cookie-parser';
import { connection } from './db/conn.js';
import { prtRoute } from './middleware/prtRoute.js';


dotenv.config()
const app = express();
const port = process.env.PORT || 2222 ;


const __dirname = path.resolve()


app.use(express.json());
app.use(cookieParser());



app.use('/api/v1/auth',authRoute);
app.use('/api/v1/media', prtRoute,mediaRoute); 
app.use('/api/v1/search', prtRoute,searchRoute); 


if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,'/frontend/dist')))

    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"))
    })
}

app.listen(port,()=>{
    console.log(`running ${port}`);
    connection();
    
})



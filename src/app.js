import express from 'express';
import productRoute from "./routes/products"
import cateRoute from "./routes/category"
import mongoose from 'mongoose';
import cors from "cors"

const app = express();

app.use(express.json())
app.use(cors())
app.use("/api", productRoute);
app.use("/api", cateRoute);

mongoose.connect("mongodb://localhost:27017/we16306")
    .then(()=>console.log("Connect success"))
    
app.listen(3000, ()=>{
    console.log("server running on port 3000");
})
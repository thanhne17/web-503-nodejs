import express from 'express';
import productRoute from "./routes/products"
import cateRoute from "./routes/category"
import userRoute from "./routes/auths"
import coureseRoute from "./routes/courses"
import videoRoute from "./routes/video"
import mongoose from 'mongoose';
import cors from "cors"

const app = express();

app.use(express.json())
app.use(cors())
app.use("/api", productRoute);
app.use("/api", cateRoute);
app.use("/api", userRoute);
app.use("/api", videoRoute);
app.use("/api", coureseRoute);

mongoose.connect("mongodb://localhost:27017/we16306")
    .then(()=>console.log("Connect success"))
    
const port = 3005
app.listen(port, ()=>{
    console.log("server running on port "+port);
})
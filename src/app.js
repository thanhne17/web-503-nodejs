const express = require("express");
const productRoute = require("./routes/products");

const app = express();
app.use(express.json())

app.use("/api", productRoute);

app.listen(3000, ()=>{
    console.log("server running on port 3000");
})
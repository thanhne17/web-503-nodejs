const { bibat } = require("../middleware/check");
import { Router } from "express";

const route = Router();


route.get("/product", (req, res)=>{
    const products = [{id: 1, name: "Thanh"}]
    res.json(products)
})


route.post("/product", bibat, (req, res)=>{
    const products = [{id: 1, name: "Thanh"}]
    products.push(req.body);
    res.json(products)
})

module.exports = route;
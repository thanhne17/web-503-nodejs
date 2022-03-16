import products from "../models/products";
import slugify from "slugify";

export const get = async (req, res)=>{ //get all
    try {
        const product = await products.find().exec();
        res.json(product)
    } catch (error) {
        res.status(400).json({
            message: "Thêm sản phẩm không thành công"
        })
    }
};

export const detail =  (req, res)=>{ //get a
    const product = products.find(Element => Element.id === +req.params.id)
    res.json(product)
};

export const add = async (req, res)=>{ //create
    req.body.slug = slugify(req.body.name)
    try {
        const product = await new products(req.body).save();
        res.json(product)
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: "Thêm sản phẩm không thành công"
        })
    }
};

export const remove = async (req, res)=>{ //delete
    try {
        const products = await products.findByIdAndDelete({_id: req.params.id}).exec()
        res.json(products);
    } catch (error) {
        
    }
};

export const update = async (req,res)=>{ //update
    try {
        const products = await products.findByIdAndUpdate({_id: req.params.id}, req.body, { new: true}).exec()
        res.json(products)
    } catch (error) {
        
    }
};
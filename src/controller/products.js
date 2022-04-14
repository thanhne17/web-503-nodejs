import products from "../models/products";
import slugify from "slugify";

export const get = async (req, res) => { //get all
    try {
        const product = await products.find().exec();
        res.json(product)

    } catch (error) {
        res.status(400).json({
            message: "Thêm sản phẩm không thành công"
        })
    }
};

export const detail = async (req, res) => { //get a
    try {
        const product = await products.findOne({ _id: req.params.id })
        res.json(product)
    } catch (error) {

    }
};

export const add = async (req, res) => { //create
    req.body.slug = slugify(req.body.name)
    try {
        const product = await new products(req.body).save();
        console.log(req.body);
        res.json(product)
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: "Thêm sản phẩm không thành công"
        })
    }
};

export const remove = async (req, res) => { //delete
    try {
        const products = await products.findByIdAndDelete({ _id: req.params.id }).exec()
        res.json(products);
    } catch (error) {

    }
};

export const update = async (req, res) => { //update
    try {
        const product = await products.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).exec()
        res.json(product)
    } catch (error) {

    }
};

export const search = async (req, res) => {
    try {
        const searchQuery = req.query.q ? req.query.q : "";
        const product = await products.find({$text: { $search: searchQuery }}).exec()
        res.json(product)
    } catch (error) {

    }
}
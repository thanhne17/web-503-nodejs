import Coureses from "../models/coureses";
import slugify from "slugify";

export const getAll = async (req, res) => {
    try {
        const courses = await Coureses.find().exec();
        res.json(courses)
    } catch (error) {
        
    }
}

export const detail = async (req, res) => {
    try {
        const courses = await Coureses.findOne({_id: req.params.id}).exec();
        res.json(courses)
    } catch (error) {
        
    }
}

export const add = async (req, res) => {
    req.body.slug = slugify(req.body.title)
    try {
        const coureses = await new Coureses(req.body).save()
        res.json(coureses)
    } catch (error) {
        
    }
}

export const remove = async (req, res) => {
    try {
        const coureses = await Coureses.findOneAndDelete({_id: req.params.id}).exec()
        res.json(coureses)
    } catch (error) {
        
    }
}

export const update = async (req, res) => {
    req.body.slug = slugify(req.body.title)
    try {
        const coureses = await Coureses.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        res.json(coureses)
    } catch (error) {
        
    }
}
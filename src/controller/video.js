import slugify from "slugify";
import video from "../models/video"

export const getAllVideo = async (req, res) => {
    try {
        const videos =await video.find().exec()
        res.json(videos)
    } catch (error) {
        console.log(error);
    }
}

export const getOneVideo =async (req, res) => {
    try {
        console.log(req.params);
        const videos = await video.findOne({slug: req.params.slug}).exec()
        res.json(videos)
    } catch (error) {
        console.log(error);
    }
}

export const addVideo =async (req, res) => {
    req.body.slug = slugify(req.body.course_name)
    try {
        const videos = await new video(req.body).save()
        res.json(videos)
    } catch (error) {
        console.log(error);
    }
}

export const removeVideo = async (req, res) => {
    try {
        const videos = await video.findByIdAndRemove({_id: req.params.id}).exec()
        res.json(videos);
    } catch (error) {
        
    }
}
import mongoose, {ObjectId} from "mongoose";

const courseSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    slug: {
        type: String,
        lowercase: true,
        unique: true,
        index: true
    },
    description: {
        type: String,
        require: true
    },
    image_url: {
        type: String,
        require: true,
    },
    isBackEnd: {
        type: Boolean
    },
    isFontEnd: {
        type: Boolean
    }
},{ timestamps: true});

export default mongoose.model("Course", courseSchema)
import mongoose, {ObjectId} from "mongoose";

const videoSchema = mongoose.Schema({
    isOk: {
        type: Boolean,
        default: false
    },
    url_video: {
        type: String,
        default: "https://www.youtube.com/watch?v=f5hbmw7Ba7c"
    },
    course_name: {
        type: String
    },
    video_name: {
        type: String
    }
})

export default mongoose.model("Video", videoSchema)
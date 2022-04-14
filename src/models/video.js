import mongoose, {ObjectId} from "mongoose";

const videoSchema = mongoose.Schema({
    course_name: {
        type: String,
    },
    slug: {
        type: String,
    },
    video_info: {
        type: [
            {
                url_video: {
                    type: String
                },
                video_name: {
                    type: String
                }
            }
        ]
    }
})

export default mongoose.model("Video", videoSchema)
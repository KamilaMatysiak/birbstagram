import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    userName: String,
    tags: [String],
    selectedFile: String,
    likes: {
        type: [String],
        default: [],
    },
    comments: {
        type: [String],
        default: [],
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const Post = mongoose.model('Post', PostSchema);

export default Post;
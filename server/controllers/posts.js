import mongoose from "mongoose";
import Post from "../models/Post.js";

export const getPosts = async (req,res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new Post({...post, creator: req.userId, createdAt: new Date().toISOString()});
    try {
        await newPost.save();
        res.status(200).json(newPost);

    } catch(error) {
        res.status(409).json({message: error.message});
    }
}

export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).json({message: error.message })

    const updatedPost = await Post.findByIdAndUpdate(_id, {...post, _id}, {new: true});

    res.json(updatedPost)
}

export const deletePost = async (req, res) => {
    const { id: _id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).json({message: error.message })

    await Post.findByIdAndRemove(_id);

    res.json({message: 'Post deleted'});
}

export const likePost = async (req,res) => {
    const { id: _id } = req.params;

    if(!req.userId) return res.json({message: "Unauthenticated"});

    if(!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).json({message: error.message })

    const post = await Post.findById(_id);

    const index = post.likes.findIndex((id) => id === String(req.userId));
    if(index === -1){
        post.likes.push(req.userId);
    } else {
        post.likes = post.likes.filter((id) => id !== String(req.userId));
    }

    const updatedPost = await Post.findByIdAndUpdate(_id, post, {new: true})

    res.json(updatedPost);
}
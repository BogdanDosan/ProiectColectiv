const Post = require ('../models/postMessage');

module.exports = getPosts =async (req,res) =>{
    try{
        const Post = await Post.find();

        res.status(200).json(Post);

    }catch (error){

        res.status(404).json({message: error.message});
    }
}

module.exports = createPost =async (req, res) =>{
    const context = req.body;

    const newPost = new Post(context);

    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message:error.message})
    }
}
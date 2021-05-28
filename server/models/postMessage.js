const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    rezumat: String,
    createAt:{
        type: Date,
        default: new Date()
    },
    poza: String,
    comments: {
        creator: String,
        message: String,
        date: Date,
        poza: String,
    }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
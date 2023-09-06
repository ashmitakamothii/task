const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String }, // Store image URL or use GridFS for file storage
  
});
const Post = mongoose.model("Post", postSchema);
module.exports = Post;

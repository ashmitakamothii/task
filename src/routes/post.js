const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const authMiddleware = require('../middleware/authMiddleware');

// Create a New Social Post
router.post('/create', authMiddleware, postController.createPost);

// List All Social Posts
router.get('/list', postController.listPosts);

// View Details of a Specific Post
router.get('/:postId', postController.viewPost);

// Delete a Social Post (Admin)
router.delete('/delete/:postId', authMiddleware, postController.deletePost);

// Like a Post
router.post('/like/:postId', authMiddleware, postController.likePost);

// Comment on a Post
router.post('/comment/:postId', authMiddleware, postController.commentOnPost);

// List Comments for a Post
router.get('/comments/:postId', postController.listComments);

module.exports = router;



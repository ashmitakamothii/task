

// user route mate
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

//create user

router.post('/create-user',authMiddleware,userController.createUser)

// Update User Profile
router.put('/update',userController.updateUserProfile);

router.get('/list-users',authMiddleware,userController.listUsers)

module.exports = router;








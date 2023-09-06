const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middleware/authMiddleware');

// List All Users (Admin)
router.get('/users', authMiddleware, adminController.listUsers);

// Approve User Registration (Admin)
router.put('/approve/:userId', authMiddleware, adminController.approveUser);

// Discard User Registration and Send Message (Admin)
router.post('/discard/:userId', authMiddleware, adminController.discardUser);

// List Discard Messages for a User (Admin)
router.get('/discard/messages/:userId', authMiddleware, adminController.listDiscardMessages);

module.exports = router;

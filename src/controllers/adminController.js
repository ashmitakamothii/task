const User = require('../models/User');
const Post = require('../models/Post');

// List users
exports.listUsers = async (req, res) => { try {
    const users = await User.find(); res.status(200).json(users);
    } catch (error) { console.error(error);
    res.status(500).json({ error: 'Internal server error' });
    }
    };
    
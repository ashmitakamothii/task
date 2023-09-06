const User = require('../models/User');

// Create a user (registration) 
exports.createUser = async (req, res) => {
// Implement user creation logic here
};

// Update user profile
exports.updateUserProfile = async (req, res) => {
// Implement user profile update logic here


try {
    // Extract user data from the request body
    const { username, email } = req.body;

    // Get the user ID from the authenticated user's token (assuming you use JWT or similar)
    const userId = req.user.id;

    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Update user profile fields
    user.username = username || user.username;
    user.email = email || user.email;
    user.mobile=mobile||user.mobile;
    user.gender=gender||user.gender;

    // Save the updated user profile to the database
    await user.save();

    // Respond with a success message
    res.json({ message: 'User profile updated successfully' });
  } catch (error) {
    // Handle any errors that occur during profile update
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Export the updateUserProfile function
// module.exports = {
//   updateUserProfil
// };


// List users
exports.listUsers = async (req, res) => {
// Implement user listing logic here

try {
    // Fetch a list of users from the database
    const users = await User.find({}, 'username email mobile'); // You can specify the fields you want to retrieve

    // Respond with the list of users
    res.json(users);
  } catch (error) {
    // Handle any errors that occur during user listing
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}



// Admin approves or discards user registration 
exports.approveOrDiscardUser = async (req, res) => {
// Implement approval/discard logic here
};


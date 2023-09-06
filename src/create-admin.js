const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/User'); // Adjust the path to your User model

const adminUsername = 'admin'; // Set the admin username
const adminPassword = 'adminpassword'; // Set the admin password

mongoose.connect('mongodb+srv://neoverceuser:ImghH3NzuAzi6phm@cluster0.y2183tl.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', async () => {
  console.log('Connected to MongoDB');

  // Check if an admin user already exists
  const existingAdmin = await User.findOne({ username: adminUsername });
  if (existingAdmin) {
    console.log('Admin user already exists.');
    process.exit(0);
  }

  // If no admin user exists, create one
  const hashedPassword = await bcrypt.hash(adminPassword, 10);

  const adminUser = new User({
    username: adminUsername,
    email: 'admin@example.com', // Set the admin email
    password: hashedPassword,
    isAdmin: true, // Set the admin flag
  });

  try {
    await adminUser.save();
    console.log('Admin user created successfully.');
  } catch (error) {
    console.error('Error creating admin user:', error);
  } finally {
    mongoose.connection.close();
  }
});

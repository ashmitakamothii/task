const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//user registration
exports.register = async (req, res) => {
  try {
    const { username, email, mobile, gender,password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      username,
      password: hashedPassword,
      email,
      mobile,
      gender,
    });
    await user.save();
    res.status(201).json({ message: "User register successfully " });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

//user login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Authentication failed" });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ error: "Authentication failed" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};


// Admin login


    exports.adminLogin = async (req, res) => {
      try {
        const { email, password } = req.body;
    
       
        const admin = await User.findOne({ email });
    
        if (!admin) {
          return res.status(401).json({ error: "Admin authentication failed" });
        }
    
        const isValidPassword = await bcrypt.compare(password, admin.password);
    
        if (!isValidPassword) {
          return res.status(401).json({ error: "Admin authentication failed" });
        }
    
        const token = jwt.sign({ adminId: admin._id }, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });
    
        res.status(200).json({ token });
        res.status(200).json({message:"Admin login successfully"})
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
      }
    };
    
    




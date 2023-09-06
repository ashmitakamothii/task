const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("connected to mongodb");
});


app.use('/auth',require('./routes/auth'));
app.use('/user',require('./routes/user'));
// app.use('/admin',require('./routes/post'));


const PORT=process.env.PORT||3000;

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}` );
});
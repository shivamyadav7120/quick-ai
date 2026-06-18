const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log(
      `Connected to MongoDB Database ${mongoose.connection.host}`.bgGreen.white
    );
  } catch (error) {
    console.log(
      `MongoDB Database Error: ${error.message}`.bgRed.white
    );
    process.exit(1);
  }
};

module.exports = connectDB;
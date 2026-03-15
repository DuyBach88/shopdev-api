const mongoose = require("mongoose");
const connectString = "mongodb://127.0.0.1:27017/shopDEV";

const connectDB = async () => {
  try {
    await mongoose.connect(connectString);
    console.log("MongoDB connected success");
  } catch (error) {
    console.error("MongoDB connect error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;

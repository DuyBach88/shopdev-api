const mongoose = require("mongoose");
const { checkConnect } = require("../helpers/check.connect.js");
const connectString = "mongodb://127.0.0.1:27017/shopDEV";

class Database {
  constructor() {
    this.connect();
  }

  connect = async () => {
    try {
      mongoose.set("debug", true);
      await mongoose.connect(connectString);
      console.log("MongoDB connected PRO", checkConnect());
    } catch (error) {
      console.error("MongoDB connect error:", error);
      process.exit(1);
    }
  };

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

const instanceMongoDB = Database.getInstance();

module.exports = instanceMongoDB;

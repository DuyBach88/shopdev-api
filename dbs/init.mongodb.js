const mongoose = require("mongoose");
const { checkConnect } = require("../helpers/check.connect.js");
const { db } = require("../configs/config.mongodb.js");
const connectString = `mongodb://${db.host}:${db.port}/${db.name}`;
console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("connectString:", connectString);
class Database {
  constructor() {
    this.connect();
  }

  connect = async () => {
    try {
      mongoose.set("debug", true);
      await mongoose.connect(connectString);
      console.log("MongoDB connected PRO");
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

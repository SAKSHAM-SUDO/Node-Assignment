const mongoose = require("mongoose");
const uri = process.env.MONGODB_URI;

mongoose.connect(uri);

const db = mongoose.connection;

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

db.once("open", () => {
  console.log("Connected to MongoDB database");
});

module.exports = mongoose;

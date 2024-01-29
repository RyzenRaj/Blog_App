const mongoose = require("mongoose");
require("dotenv").config();

const connectWithDb = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(console.log("db conneced suuced"))
    .catch((err) => {
      console.log("db facing connection issue", err);
      process.exit(1);
    });
};

module.exports = connectWithDb;

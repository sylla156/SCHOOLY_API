const mongoose = require("mongoose");

//configuration des variable d'environement
const dotenv = require('dotenv');
dotenv.config({path: './config/.env'})


mongoose
  .connect(process.env.URL_DB
  )
  .then(() => console.log("connection reussir"))
  .catch((err) => console.log(err));



module.exports = mongoose;
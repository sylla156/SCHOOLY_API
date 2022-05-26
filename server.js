const express = require('express');
const dotenv = require('dotenv');
const AllStudents = require('./Routes/Students.Routes.js/index.js');

//configuration des variable d'environement
dotenv.config({path: './config/.env'})

const App = express();

App.use('/students',AllStudents);
App.listen(process.env.PORT,() => console.log(`SERVER START SUR LE PORT ${process.env.PORT}`))
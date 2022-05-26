const express = require('express');
const Router = express.Router();
const {AllStudents} = require('../../Controllers/Students.controllers.js/index');

Router.get('/',AllStudents)

module.exports = Router;
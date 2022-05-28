const express = require("express");
const Router = express.Router();
const {
  AllStudents,
  CreateStudent,
  GetStudent
} = require("../../Controllers/Students.controllers/index");

Router.route("/").get(AllStudents).post(CreateStudent);

Router.post('/login',GetStudent);
module.exports = Router;

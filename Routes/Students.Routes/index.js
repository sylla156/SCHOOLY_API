const express = require("express");
const Router = express.Router();
const {
  AllStudents,
  CreateStudent,
} = require("../../Controllers/Students.controllers/index");

Router.route("/").get(AllStudents).post(CreateStudent);

module.exports = Router;

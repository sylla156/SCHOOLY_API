const express = require("express");
const Router = express.Router();
const {
  AllStudents,
  CreateStudent,
  GetStudent,
  UpdatePassword,
} = require("../../Controllers/Students.controllers/index");

Router.route("/").get(AllStudents).post(CreateStudent);
Router.patch("/:id", UpdatePassword);
Router.post("/login", GetStudent);
module.exports = Router;

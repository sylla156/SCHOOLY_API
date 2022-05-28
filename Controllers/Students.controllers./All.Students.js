const STUDENTS = require("../../Models/Students.Models");

const AllStudents = async (request, response) => {
  const student = await STUDENTS.find({});
  response.send(student);
};

module.exports = AllStudents;

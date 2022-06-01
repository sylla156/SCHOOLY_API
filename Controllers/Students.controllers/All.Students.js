const STUDENTS = require("../../Models/Students.Models");

const AllStudents = async (request, response) => {
  try {
    STUDENTS.find({}, (docs, error) => {
      if (error) response.status(500).send(error);
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = AllStudents;

const STUDENTS = require("../../Models/Students.Models");

const CreateStudent = async (request, response) => {
  try {
    const data = request.body;
    STUDENTS.create(data, (error, docs) => {
      if (error) {
        response.status(500).send(error);
      }
      response.send(docs);
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = CreateStudent;

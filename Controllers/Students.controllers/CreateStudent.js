const STUDENTS = require("../../Models/Students.Models");
const Encrypt = require("../../utils/Encrypt");

const CreateStudent = async (request, response) => {
  try {
    const data = request.body;
    let hash = Encrypt(data.password);
    hash.then((res) => {
      data.password = res;
      STUDENTS.create(data, (error, docs) => {
        if (error) {
          response.status(404).send(error);
        }
        response.send(docs);
      });
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = CreateStudent;

const STUDENTS = require("../../Models/Students.Models");
const isEmpty = require("../../utils/IsEmpty");
const isSame = require("../../utils/IsSame");

const GetStudent = async (request, response) => {
  try {
    const { matricule, password } = request.body;
    await STUDENTS.find({ matricule }, (error, docs) => {
      if (error) {
        response.status(500).send(err);
        return;
      } else {
        if (isEmpty(docs)) {
          response.send({
            errors: {
              matricule: "no found",
            },
          });
        }else {
            response.send(docs)
        }
      }
    });
  } catch (error) {
    console.log(error);
  }
};



module.exports = GetStudent;

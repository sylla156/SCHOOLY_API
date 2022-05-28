const STUDENTS = require("../../Models/Students.Models");
const Decrypt = require("../../utils/Decrypt");
const isEmpty = require("../../utils/IsEmpty");
const isSame = require("../../utils/IsSame");

const GetStudent = async (request, response) => {
  try {
    const { matricule, password } = request.body;
    STUDENTS.find({ matricule }, (error, docs) => {
      if (error) {
        response.status(500).send(err);
        // return;
      } else {
        if (isEmpty(docs)) {
          response.send({
            errors: {
              matricule: "no found",
            },
          });
        } else {
          const value = Decrypt(password, docs[0].password);
          value.then((res) => {
            if (res) {
              response.send(docs);
            } else {
              response.send({
                errors: {
                  password: "is not found",
                },
              });
            }
          });
        }
      }
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = GetStudent;

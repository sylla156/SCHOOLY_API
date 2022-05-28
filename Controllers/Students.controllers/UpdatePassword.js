const STUDENTS = require("../../Models/Students.Models");
const Encrypt = require("../../utils/Encrypt");
const isEmpty = require("../../utils/IsEmpty");
const isSame = require("../../utils/IsSame");

const UpdatePassword = async (request, response) => {
  const ID = request.params.id;
  const { password, confirmPassword } = request.body;

  if (
    isSame(password, confirmPassword) ||
    isEmpty(password) ||
    isEmpty(confirmPassword)
  ) {
    const hash = Encrypt(password);

    hash.then((res) => {
      STUDENTS.findByIdAndUpdate(
        ID,
        { password: res },
        { new: true },
        (error, docs) => {
          if (error) response.send(error);
          else response.send(docs);
        }
      );
    });
  } else {
    response.status(400).json({
      errors: {
        password: "password is not same or undefined",
      },
    });
  }
};

module.exports = UpdatePassword;

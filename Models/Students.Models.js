const mongoose = require("../config/DatabaseConnection");

const StudentsSchema = new mongoose.Schema(
  {
    matricule: { type: String, minlength: 8, required: true, unique: true },
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    tel: { type: String, required: true, length: 10 },
    confidentiel: {
      type: String,
      minlength: 8,
      required: true,
      default: "schoolyFirst",
    },
    password: { type: String, minlength: 8, required: true },
  },
  {
    timestamps: true,
  }
);

const STUDENTS = mongoose.model("students", StudentsSchema);

module.exports = STUDENTS;

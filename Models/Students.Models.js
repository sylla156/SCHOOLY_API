const mongoose = require("../config/DatabaseConnection");

const StudentsSchema = new mongoose.Schema(
  {
    matricule: { type: String, minlength: 8, required: true, unique: true },
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    age: { type: Number, length: 4 },
    tel: { type: String, required: true, length: 10 },
    confidentiel: {
      type: String,
      minlength: 8,
      required: true,
      default: "schoolyFirst",
    },
    enpreinte: { type: String },
    password: { type: String, minlength: 8, required: true },
    pere: {
      nom: String,
      prenom: String,
      profession: String,
      tel: String,
    },
    mere: {
      nom: String,
      prenom: String,
      profession: String,
      tel: String,
    },
    niveau: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const STUDENTS = mongoose.model("students", StudentsSchema);

module.exports = STUDENTS;

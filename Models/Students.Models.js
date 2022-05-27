const mongoose = require("../config/DatabaseConnection");

const StudentsSchema = new mongoose.Schema(
  {
    matricule: { type: String, minlength: 8, required: true },
    confidentiel: {
      type: String,
      minlength: 8,
      required: true,
      default: "schoolyFirst",
    },
    enpreinte: { type: String },
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    age: { type: Date },
    pere: {
      nom: String,
      prenom: String,
      profession: String,
    },
    mere: {
      nom: String,
      prenom: String,
      profession: String,
    },
    niveau: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const STUDENTS = mongoose.model("students", StudentsSchema);

module.exports = STUDENTS;

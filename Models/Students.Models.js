const mongoose = require("../config/DatabaseConnection");

const StudentsSchema = new mongoose.Schema(
  {
    matricule: { type: String, minlength: 8, required: false, unique: false },
    confidentiel: {
      type: String,
      minlength: 8,
      required: false,
      default: "schoolyFirst",
    },
    enpreinte: { type: String },
    nom: { type: String, required: false },
    prenom: { type: String, required: false },
    age: { type: Date },
    tel: { type: Number, required: false },
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
    niveau: { type: String, required: false },
  },
  {
    timestamps: false,
  }
);

const STUDENTS = mongoose.model("students", StudentsSchema);

module.exports = STUDENTS;

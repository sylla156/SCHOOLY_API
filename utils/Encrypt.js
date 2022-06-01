const bcrypt = require("bcrypt");
const { response } = require("express");

const Encrypt = async (PlainText) => {
  try {
    return await bcrypt.hash(PlainText, 10);
  } catch (error) {
    console.log(error);
  }
};

module.exports = Encrypt;

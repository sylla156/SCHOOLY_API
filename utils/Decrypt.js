const bcrypt = require("bcrypt");

const Decrypt = async (PlainText, hash) => {
  return await bcrypt.compare(PlainText, hash);
};

module.exports = Decrypt;

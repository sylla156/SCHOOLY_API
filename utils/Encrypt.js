const bcrypt = require('bcrypt');


const Encrypt = async (PlainText,) => {
   const hash = await bcrypt.hash(PlainText, 10);
   return hash;
}

module.exports = Encrypt;
const bcrypt = require('bcrypt');

const Decrypt = async (PlainText,hash) => {
    const value = await bcrypt.compare(PlainText, hash);
    return value;
}

module.exports = Decrypt;
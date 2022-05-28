const bcrypt = require('bcrypt');

const Decrypt = (PlainText,hash) => {
    bcrypt.compare(PlainText, hash, function(err, result) {
        console.log(result);
    });
}

module.exports = Decrypt;
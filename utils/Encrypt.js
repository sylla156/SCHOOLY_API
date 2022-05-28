const bcrypt = require('bcrypt');


const Encrypt = (PlainText) => {
    bcrypt.hash(PlainText, 10, function(err, hash) {
        console.log(hash);
    });
}

module.exports = Encrypt;
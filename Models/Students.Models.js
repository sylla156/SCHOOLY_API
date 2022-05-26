const mongoose = require('../config/DatabaseConnection');

const ElevesSchema = new mongoose.Schema({
    name:{type:String}
})


const ELEVES = mongoose.model('ELEVES',ElevesSchema);


module.exports = ELEVES;
const mongoose = require('mongoose');

const ListSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    catedratico: {type : String, required:true},
    curso: {type : String, required:true},
    hora: {type : String, required:true},
    clases: []
});

module.exports = mongoose.model('List', ListSchema);
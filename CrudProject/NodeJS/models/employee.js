const mongoose = require('mongoose');

var Employee = mongoose.model('Associate', {
    name: {type: String},
    position: {type: String},
    office: {type: String},
    kms_covered: {type: Number}
});

module.exports= { Employee };

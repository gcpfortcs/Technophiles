const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/MongoDB',  (err) => {
    if(!err)
    	console.log('Mongo DB connection succeed..');
    else
    	console.log('Eror in db connection :', +JSON.stringify(err,undefined,2));
});
module.exports=mongoose;
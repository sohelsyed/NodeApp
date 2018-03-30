const mongoose = require('mongoose');

console.log('Connecting to mongo databse');

var db = mongoose.createConnection('mongodb://localhost/test');
// Alernate
//mongoose.connect('mongodb://localhost/test');

// This can be used only with create Connection 
db.on('error', console.error.bind(console, 'connection error:'));


var personSchema = new mongoose.Schema({
    name : String,
    zip: Number
});

var Person = mongoose.model('Person',personSchema);

var joe = new Person({
    name: 'Joe2', zip :77001
});


db.once('open', function (){
    console.log('Connected Successfully.. In open')
    
joe.save(function(err,data){
    console.log('In Sabe');
    if (err){
        console.log('Error saving Joe');
    } else {
        console.log('Success');
    }
});

});




//mongoose.disconnect();
//console.log('Diconnecting from mongo database');
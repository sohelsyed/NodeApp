// WAY 2 to connect to database
const db = require('mongoose');

console.log('Connecting to mongo databse');

db.connect('mongodb://localhost/test');

var personSchema = new db.Schema({
    name : String,
    zip: Number
});

var Person = db.model('Person',personSchema);

var joe = new Person({
    name: 'Joe2', zip :77001
});

joe.save(function(err,data){
    console.log('In Save');
    if (err){
        console.log('Error saving Joe');
    } else {
        console.log('Success');
    }
});
db.disconnect();
//console.log('Diconnecting from mongo database');
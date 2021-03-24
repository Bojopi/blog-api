const mongoose = require('mongoose')
const uri = "mongodb+srv://admin:blog-campus2021@blogcampus.pz0jx.mongodb.net/blog-api?retryWrites=true&w=majority";

mongoose.connect(uri)
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err))


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://admin:blog-campus2021@blogcampus.pz0jx.mongodb.net/blog-api?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   console.log(err)
//   client.close();
// });



module.exports = mongoose
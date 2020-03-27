const http = require('http');
const dt = require('./modules/dateTimeFinder.js');
// const url = require('url');
const fs = require('fs');
const add = require('./modules/addItem');

// http.createServer((req, res) => {
//     fs.readFile('../public/index.html', (err, data) => {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//         res.end();
//     });
// }).listen(8080);


const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://LukeDate:Passw0rd1luk3@cluster0-wflze.mongodb.net/test?retryWrites=true&w=majority";
const assert = require('assert');

MongoClient.connect(url, function(err, client) {
    const db = client.db("test");
    db.collection('inventory').insertOne(add.addItem())
      .then(function(result) {
       console.log(result)
      })
    assert.equal(null, err);
    console.log('Connected');
    client.close();
});
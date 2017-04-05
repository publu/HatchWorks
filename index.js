require('dotenv').config()
var pg = require('pg');
 
// instantiate a new client 
// the client will read connection information from 
// the same environment variables used by postgres cli tools 

var conString = process.env.PG_URL;

var client = new pg.Client(conString);

client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT NOW() AS "theTime"', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].theTime);
    //output: Tue Jan 15 2013 19:12:47 GMT-600 (CST)
    client.end();
  });
});
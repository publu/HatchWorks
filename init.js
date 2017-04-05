const pg = require('pg');
require('dotenv').config()

var conString = process.env.PG_URL;

const client = new pg.Client(conString);

client.connect();

const query = client.query(
  'CREATE TABLE Condition( Name PRIMARY KEY VARCHAR(30) NOT NULL, R_length INT NOT NULL, O_length INT NOT NULL, Price INT NOT NULL)'
);

const query = client.query(
  'CREATE TABLE Condition( Name PRIMARY KEY VARCHAR(30) NOT NULL, R_length INT NOT NULL, O_length INT NOT NULL, Price INT NOT NULL)'
);

query.on('end', () => { client.end(); });
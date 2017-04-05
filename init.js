const pg = require('pg');
require('dotenv').config()

var conString = process.env.PG_URL;

const client = new pg.Client(conString);

client.connect();

// Conditions
const query = client.query(
  'CREATE TABLE Condition( Name PRIMARY KEY VARCHAR(80) NOT NULL, R_length INT NOT NULL, O_length INT NOT NULL, Price INT NOT NULL)'
);

// Insurance_Company
const query = client.query(
  'CREATE TABLE Insurance_Company (Name PRIMARY KEY VARCHAR(80) NOT NULL, Max_Allowance DOUBLE, Agent VARCHAR(80), Deductible DOUBLE)'
);

// Nurse
const query = client.query(
  'CREATE TABLE Nurse(SSN PRIMARY KEY CHAR(9) NOT NULL, Pay DOUBLE, Rank VARCHAR(80), Address VARCHAR(120) )'
);

// Patient
const query = client.query(
  'CREATE TABLE Nurse(SSN PRIMARY KEY CHAR(9) NOT NULL, Next_of_Kin VARCHAR(80), LivingWill VARCHAR(80), Name VARCHAR(80), Phone CHAR(10), Address VARCHAR(120), R_Timeslot DATE, O_Timeslot DATE, Insurance varchar(80) references Insurance(Name), R_Room varchar(80) references Room(Room No), O_Room varchar(80) references Room(Room No), Tech_SSN char(9) references Technician(SSN), Nurse_SSN char(9) references Nurse(SSN), Surgeon_SSN char(9) references Surgeon(SSN), C_Name VARCHAR(80) references Condition(Name))'
);

query.on('end', () => { client.end(); });
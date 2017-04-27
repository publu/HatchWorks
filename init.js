const pg = require('pg');
require('dotenv').config()
var conString = "postgres://dzluurjf:iUOPz6t0Hbmrpwse_oTOBOyco9yf7VCR@stampy.db.elephantsql.com:5432/dzluurjf";
const client = new pg.Client(conString);
client.connect();

/* Conditions
const Conditions = client.query(
  'CREATE TABLE Condition( Name VARCHAR(80) PRIMARY KEY, R_length INT NOT NULL, O_length INT NOT NULL, Price INT NOT NULL)'
);*/

/*Insurance_Company
const Insurance = client.query(
  'CREATE TABLE Insurance_Company (Name VARCHAR(80) PRIMARY KEY, Max_Allowance double precision precision, Agent VARCHAR(80), Deductible double precision precision)'
);*/

/* Nurse
const Nurse = client.query(
  'CREATE TABLE Nurse(SSN CHAR(9) PRIMARY KEY, Pay double precision, Rank VARCHAR(80), Address VARCHAR(120) )'
);*/

/* Patient
const Patient = client.query(
  'CREATE TABLE Patient(SSN CHAR(9) PRIMARY KEY, Next_of_Kin VARCHAR(80), LivingWill VARCHAR(80), Name VARCHAR(80), Phone CHAR(10), Address VARCHAR(120), R_Timeslot DATE, O_Timeslot DATE, Insurance varchar(80) references Insurance_Company(Name), R_Room INT references Room(Room_No), O_Room INT references Room(Room_No), Tech_SSN char(9) references Technician(SSN), Nurse_SSN char(9) references Nurse(SSN), Surgeon_SSN char(9) references Surgeon(SSN), C_Name VARCHAR(80) references Condition(Name))'
);*/

/*Room
const Room = client.query(
  'CREATE TABLE Room(Room_No INT PRIMARY KEY, Price double precision, Type boolean, Ward_ID INT references Ward(Ward_ID) )'
);*/

/* Surgeon
const Surgeon = client.query(
  'CREATE TABLE Surgeon(SSN CHAR(9) PRIMARY KEY, Pay double precision, Name VARCHAR(80), Address VARCHAR(120), C_Name VARCHAR(80) references Condition(Name))'
);*/

/* Technician
const Technician = client.query(
  'CREATE TABLE Technician(SSN CHAR(9) PRIMARY KEY, Pay double precision, Name VARCHAR(80), Address VARCHAR(120) )'
);*/

/* Ward
const Ward = client.query(
  'CREATE TABLE Ward(Ward_ID INT PRIMARY KEY)'
);*/















const express = require('express')
const mysql = require('mysql')

const server = express()
const PORT = 3001
let data;

const db = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'admin',
    database: 'nodedb'
})

const createTable = `
    CREATE TABLE IF NOT EXISTS developers (
        id int NOT NULL AUTO_INCREMENT,
        first_name varchar(50),
        last_name varchar(50),
        age int,
        role varchar(100),
        PRIMARY KEY (id)
    );
`

const cleanData = `
    DELETE 
    FROM
        developers;
`

const insertData = `INSERT INTO developers (
    first_name,
    last_name,
    age,
    role
) VALUES (
    'Andris',
    'Buscariolli',
    33,
    'Software Developer'
)`

const retrieveData = `
    SELECT
        *
    FROM
        developers;
`

db.connect(err => {
    if (err) throw err
    console.log('Connected to the mysql')
    
    db.query(createTable)
    db.query(cleanData)    
    db.query(insertData, (err, result) => {
        if (err) throw err
        console.log('New record inserted')
    })
    db.query(retrieveData, (err, result) => {
        if (err) throw err
        console.log(result);
        data = result;
    })
})

server.get('/', (req, res) => {
    res.send(data)
})

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`)
})

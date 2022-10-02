const express = require('express')
const mysql = require('mysql')

const server = express()
const PORT = 3001
let data;

const connection = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'admin',
    database: 'nodedb'
})

const clean_data = `
    DELETE 
    FROM
        developers;
`

const insert_data = `INSERT INTO developers (
    first_name,
    last_name,
    role,
    age
) VALUES (
    'Andris',
    'Buscariolli',
    'Software Developer',
    33
)`

const retrieve_data = `
    SELECT
        *
    FROM
        developers;
`

connection.connect(err => {
    if (err) throw err
    console.log('Connected to the mysql')

    connection.query(clean_data)

    connection.query(insert_data, (err, result) => {
        if (err) throw err
        console.log('New record inserted')
    })

    connection.query(retrieve_data, (err, result, fields) => {
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

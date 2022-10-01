const express = require('express')

const server = express()
const PORT = 3001

server.get('/', (req, res) => {
    res.send('Hello from server')
})

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`)
})

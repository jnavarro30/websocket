const express = require('express')
const socket = require('socket.io')

// setup app
const app = express()
const server = app.listen(4000, () => console.log(`Server is running on PORT: 4000`))

// static files 
app.use(express.static('public'))

// socket setup
const io = socket(server)

io.on('connection', socket => {
    console.log('Made socket connection.', socket.id)
})
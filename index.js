// Creates a controller
const express = require('express')
const app = express()

// Tells controller to know about files in public directory
app.use(express.static(__dirname + '/public'))

// Tells controller to send index.html as response when a get request is made to the root
app.get('/', (req, resp) => resp.sendFile('index.html'))

app.listen(3000, () => console.log('listening on port: 3000'))
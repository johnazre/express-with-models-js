const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const port = 8000

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use('/api/v1/users', require('./controllers/userController'))

app.listen(8000, () => console.log('listening on port: ' + port))

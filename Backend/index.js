const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')

connectToMongo();
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())


app.use('/api/auth',require('./routes/auth'))
app.use('/api/image',require('./routes/image'))


app.listen(port, () => {
  console.log(`iNotebook backend listening on port ${port}`)
})
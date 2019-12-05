const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 8080

app.use(bodyParser.json())


// Connect to mongoose

mongoose.connect('mongodb://localhost/bookstore', {useNewUrlParser : true})
const db = mongoose.connection;
db.once('open', () => {
    console.log('Connected to MongoDB')
})
db.on('error', () => {
    console.log('Error')
})

app.get('/', (req, res) => {
    res.send('Please use  /api/bookss')
})

app.use('/api/genres', require('./routes/genre'))
app.use('/api/books', require('./routes/book'))


app.listen(port, ()=>{
    console.log(` The server is up running on port : ${port}`)

})


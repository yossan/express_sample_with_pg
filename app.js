const dotenv   = require('dotenv').config()
const express  = require('express')
const bodyParser = require('body-parser')
const {Client} = require('pg')

const index     = require('./routes/index')
const employees = require('./routes/employees')
const search    = require('./routes/search')

/*
const client = new Client()
client.connect()
client.on('error', function (err) {
    console.log('db error: ' + err)
    exit(1)
})
*/

const app = express()

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

// Set template engine
app.set('views', './views')
app.set('view engine', 'hbs')

// Add middlewares
app.use('/', index)
app.use('/employees', employees)
app.use('/search', search)

// Catch 404
app.use(function(req, res, next) {
    const err = new Error('Not Found')
    err.status = 404
    next(err)
})

// Handle Error
app.use(function(err, req, res, next) {
    console.log(err)
    res.status(err.status || 500).send('Sorry! Error occurs')
})

// Listen
const port = process.env.PORT
app.listen(port, function (err) {
    if (err) {
        console.log('failed to listen because ' + err)
        return;
    }
    console.log('starts listening on ' + port)
})

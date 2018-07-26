const express = require('express')
const router = express.Router()
//const employees = require('./employees')

//router.use('/', employees)
router.get('/', function (req, res) {
    res.render('index')
})

module.exports = router

const Employees = require('../models/Employees')

let prevResults = []

exports.getIndex = function (req, res, next) {
    res.render('search', {employees: prevResults})
}

exports.postIndex = function (req, res, next) {
    Employees
        .searchByName(req.body.name)
        .then((result) => {
            prevResults = result.rows
            res.render('search', {employees: prevResults})
        })
        .catch((e) => {
            next(e)
        })
}


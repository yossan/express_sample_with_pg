const Employees = require('../models/Employees')

exports.getIndex = function (req, res, next) {
    Employees
        .fetchAll()
        .then((employees) => {
            res.render('employees', {employees: employees})
        })
        .catch((e) => {
            next(e)
        })
}

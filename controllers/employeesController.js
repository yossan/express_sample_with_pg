const Employees = require('../models/Employees')

exports.getIndex = function (req, res) {
    Employees.fetchAll()
        .then((employees) => {
            res.render('employees', {employees: employees})
        })
}

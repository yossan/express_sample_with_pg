const {Pool} = require('pg')

module.exports.fetchAll = function () {
    const pool = new Pool()
    return new Promise((resolve, reject) => {
        pool.connect((err, client, release) => {
            if (err) {
                throw err
            }

            client
                .query('SELECT * FROM employees')
                .then((ret) => {
                    release()
                    resolve(ret.rows)
                })
                .catch((err) => {
                    release()
                    reject(err)
                }
        })
    })
}



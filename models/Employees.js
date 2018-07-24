const pool = require('./pgpool')

module.exports.fetchAll = function () {
    return new Promise( async (resolve, reject) => {
        const client = await pool.connect()
        try {
            const res = await client.query('SELECT * FROM employees')
            resolve(res.rows)
        } catch (e) {
            reject(e)
        } finally {
            client.release()
        }
    })
}

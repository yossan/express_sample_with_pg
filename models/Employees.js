const pool = require('./pgpool')

module.exports.fetchAll = function () {
    return new Promise( async (resolve, reject) => {
        let client
        try {
            client = await pool.connect()
            const res = await client.query('SELECT * FROM employees')
            client.release()
            resolve(res.rows)
        } catch (e) {
            if (client) { client.release() }
            reject(e)
        }
    })
}

module.exports.searchByName = async function (name) {
    let client
    try {
        client = await pool.connect()
        const res = await client.query('SELECT * FROM employees WHERE name LIKE $1', [`%${name}%`])
        client.release()
        return res
    } catch (e) {
        if (client) { client.release() }
        throw(e)
    }
}

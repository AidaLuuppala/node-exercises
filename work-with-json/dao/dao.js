const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: 'localhost',
    database: 'service_point_api_db',
    user:'root',
    password: 'password',
    connectionLimit: 5
});

exports.insertInto = async function insertInto(office) {
    let conn;
    try {
        conn = await pool.getConnection();
        const res = await conn.query("INSERT INTO office() value(?,?)", [1, "mariadb"]);
        console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
    } catch (err) {
        throw err;
    } finally {
        if (conn) return conn.end();
    }
}
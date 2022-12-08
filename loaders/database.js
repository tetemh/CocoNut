const mysql = require('mysql')
const config = require("../config");

module.exports = async () => {
    
    let db = await mysql.createConnection({
        host: config.bot.db.host,
        user: config.bot.db.user,
        password: config.bot.db.password,
        database: config.bot.db.database
    })

    return db
}
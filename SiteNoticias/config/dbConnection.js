var mysql = require("mysql2");

var connMysql = () => {
    return mysql.createConnection({
            host: "localhost",
            user: "app_usuario",
            password: "12345",
            database: "portal_noticias"
        });
}

module.exports = () => {
    return connMysql
};
        
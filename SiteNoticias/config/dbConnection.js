var mysql = require("mysql2");

module.exports = () => {
    return mysql.createConnection({
            host: "localhost",
            user: "app_usuario",
            password: "12345",
            database: "portal_noticias"
        });
};
        
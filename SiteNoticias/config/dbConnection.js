var mysql = require("mysql2");

var connMysql = () => {
    console.log("conexão com o bd foi efetuada")
    return mysql.createConnection({
            host: "localhost",
            user: "app_usuario",
            password: "12345",
            database: "portal_noticias"
        });
}

module.exports = () => {
    console.log("Modulo dbConnection foi exportado")
    return connMysql
};
        
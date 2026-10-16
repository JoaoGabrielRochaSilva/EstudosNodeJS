var dbConnection = require("../../config/dbConnection");

module.exports = (app) => {
    app.get("/noticias", (req , res) => {

        var connection = dbConnection();

        connection.query("select * from noticias", (error, result) => {
            
            res.render("noticias/noticias", {noticias: result});
              
        });

        
    });
}
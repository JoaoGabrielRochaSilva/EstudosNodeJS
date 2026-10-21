module.exports = (app) => {
    app.get("/noticias", (req , res) => {

        var connection = app.config.dbConnection();
        var NoticiasDAO = new app.app.models.NoticiasDAO(connection);

        NoticiasDAO.getNoticias((error, result) => {
            res.render("noticias/noticias", {noticias: result});  
        })
    });
}
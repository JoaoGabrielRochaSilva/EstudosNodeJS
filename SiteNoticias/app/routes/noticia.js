module.exports = (app) => {
    app.get("/noticia", (req , res) => {

        var connection = app.config.dbConnection();
        var NoticiasDAO = new app.app.models.NoticiasDAO(connection);

        NoticiasDAO.getNoticia((error, result) => {
            res.render("noticias/noticia", {noticia: result}); 
        });  
    });
}
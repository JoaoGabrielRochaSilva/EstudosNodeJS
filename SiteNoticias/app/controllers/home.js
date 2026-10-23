module.exports.index = function(app, req, res) {

    var connection = app.config.dbConnection();
    var NoticiasDAO = new app.app.models.NoticiasDAO(connection);

    NoticiasDAO.get5UltimasNoticias((error, result) => {
        res.render("home/index", {noticias: result});
    });

    
}
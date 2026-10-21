module.exports.formulario_insercao_noticia = function(app, req, res) {
    res.render("admin/formulario_insercao_noticia", {validacao: [], noticia: {}})
}

module.exports.noticia_salvar = function(app, req, res) {
    var noticia = req.body;

    req.assert("titulo", "Titulo é obrigatório").notEmpty();
    req.assert("resumo", "Resumo é obrigatório").notEmpty();
    req.assert("resumo", "O resumo tem que ter entre 10 e 100 caracteres").len(10, 100);
    req.assert("autor", "Autor é obrigatório").notEmpty();
    req.assert("data_noticia", "Data é obrigatória").notEmpty().isDate({format: "YYYY-MM-DD"});
    req.assert("noticia", "Noticia é obrigatória").notEmpty();

    var erros = req.validationErrors();

    if (erros) {
        res.render("admin/formulario_insercao_noticia", {validacao: erros, noticia: noticia})
        return;
    }
    
    var connection = app.config.dbConnection();
    var NoticiasDAO = new app.app.models.NoticiasDAO(connection);

    NoticiasDAO.salvarNoticia(noticia, (error, result) => {
        res.redirect("/noticias");
    })
}
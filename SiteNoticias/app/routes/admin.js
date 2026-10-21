module.exports = (app) => {
    app.get("/formulario_insercao_noticia", (req , res) => {

        res.render("admin/formulario_insercao_noticia")
    })

    app.post("/noticias/salvar", (req , res) => {
        var noticia = req.body;
        
        var connection = app.config.dbConnection();
        var noticiasModel = app.app.models.noticiasModel;

        noticiasModel.salvarNoticia(noticia ,connection, (error, result) => {
            res.redirect("/noticias");
        })
    })
}
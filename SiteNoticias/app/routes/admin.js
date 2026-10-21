module.exports = (app) => {
    app.get("/formulario_insercao_noticia", (req , res) => {
        app.app.controllers.admin.formulario_insercao_noticia(app, req, res);
    })

    app.post("/noticias/salvar", (req , res) => {
        app.app.controllers.admin.noticia_salvar(app, req, res)
    })
}
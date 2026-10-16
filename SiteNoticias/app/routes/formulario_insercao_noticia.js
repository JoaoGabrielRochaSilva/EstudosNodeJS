module.exports = (app) => {
    app.get("/formulario_insercao_noticia", (req , res) => {

        res.render("admin/formulario_insercao_noticia")
    })
}
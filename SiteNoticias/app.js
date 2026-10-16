var express = require('express');

var app = express();

app.set("view engine", "ejs");

app.get("/", (req , res) => {

    res.render("home/index")
});

app.get("/formulario_insercao_noticia", (req , res) => {

    res.render("admin/formulario_insercao_noticia")
})

app.get("/noticias", (req , res) => {

    res.render("noticias/noticias")
})

app.listen(3000, () => {
    console.log("Rodando essa bomba com express framework");
});
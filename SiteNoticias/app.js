var app = require("./config/server");

//var rotaHome = require("./app/routes/home")(app);

//var rotaFormulario = require("./app/routes/formulario_insercao_noticia")(app);

//var rotaNoticias = require("./app/routes/noticias")(app);

app.listen(3000, () => {
    console.log("Rodando essa bomba com express framework");
});
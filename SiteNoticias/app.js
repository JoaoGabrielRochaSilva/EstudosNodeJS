var app = require("./config/server");

var rotaHome = require("./app/routies/home")(app);

var rotaFormulario = require("./app/routies/formulario_insercao_noticia")(app);

var rotaNoticias = require("./app/routies/noticias")(app);

app.listen(3000, () => {
    console.log("Rodando essa bomba com express framework");
});
var http = require('http');

var server = http.createServer((req, res) => {

    var url = req.url;

    if (url == "/tecnologia") {
        res.end("<html><body><h1>Notícias de Tecnologia</h1></body></html>");
    } else if (url == "/esportes") {
        res.end("<html><body><h1>Notícias de Esportes</h1></body></html>");
    } else if (url == "/politica") {
        res.end("<html><body><h1>Notícias de Política</h1></body></html>");
    } else {
        res.end("<html><body><h1>Portal de Notícias</h1></body></html>");
    }
    
});


server.listen(3000);
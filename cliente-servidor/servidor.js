var express = require('express');
// Instancia de la librería express
var app = express();

// req => Peticion  --- res => Resultado
app.get('/', function(req, res){
    res.send("Hola Mundo desde <strong>node</strong>");
});

app.get("/blog", blog);


function blog(req, res){
    res.send("Este es mi blog");
}
app.listen(3030);
let express = require('express');
let app = express();

app.get('/', function(req, res){
    res.send('Primeira rota com Express');
});

app.get('/teste', function(req, res){
    res.send('Testando rota');
});


app.listen(2000, function(){
    console.log('A aplicação está funcionando na porta 2000')
});
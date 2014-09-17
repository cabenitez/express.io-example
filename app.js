
app = require('express.io')()
app.http().io()



// Send the client html.
app.get('/', function(req, res) {
    req.io.broadcast('talk',{valor: 'desde sys'});
    res.sendfile(__dirname + '/index.html');


});

app.get('/setData', function(req, res) {
	req.io.broadcast('talk',{valor: req.param('valor')});
	res.sendfile(__dirname + '/index2.html');
});

app.listen(7076);
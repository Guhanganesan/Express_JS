var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.use(express.static('public'));


app.get('/test_image', function(req, res){
    res.render('test_image');
});

app.listen(3000);

/*
for mutiple static directories:-

app.use(express.static('public'));
app.use(express.static('images'));

*/


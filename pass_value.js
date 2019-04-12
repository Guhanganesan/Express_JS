//Passing vlaues to templates
//create one more file dynamic.pug in views folder

var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/dynamic_view', function(req, res){
   res.render('dynamic1', {
      name:"Express JS",
	  age : 25,
	  mob : 63864881,
      url: "https://expressjs.com/"
	});
});

app.listen(3000);

var express = require('Express');
var app = express();

var things = require('./things.js');

//both index.js and things.js should be in same directory
app.use('/things', things);

app.listen(3000);

 

/*
Express JS Installation:-

1. open node js command promt
2. check npm version: npm --v
3. mkdir myapp
4. cd myapp
5. npm install -g express
6. npm install -g express --save
7. npm install body-parser --save
8. npm install cookie-parser --save
9. npm install multer --save
10. create app.js and type above codings
11. npm install express 
12. To Run->   node app.js 

*/


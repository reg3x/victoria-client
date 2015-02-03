var express = require('express');
    app = express();
    cons = require('consolidate'); 
    compress = require('compression');

app.use(compress());
app.use(express.static(__dirname));
app.engine('html', cons.swig)
.set('view engine', 'html')
.set('views', __dirname )
.get('/', function (req, res){
    res.render('index.html');
});

app.listen(8080);
console.log('Express server started at 8080');

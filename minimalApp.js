var express = require('express')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 80);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.set('view options', {
    layout: false
  });
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('abcd'));
  app.use(express.session( { secret: 'abcd' }));
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(app.router);
});

/****** ROUTES **********/
app.get('/', function(req, res){
  console.log("server request for / handled");  

  res.render('index');
});

app.get('/partials/:name', function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
});

app.get('*', function(req, res){
  console.log("server request for * handled");  

  res.render('index');
});
/****** END: ROUTES **********/

app.listen(3000);

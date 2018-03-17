var express = require('express');
var reload = require('reload');
var app = express();

app.set('port', process.env.PORT || 3000 );
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.locals.siteTitle = 'Elevation';


app.use(require('./routes/index'));
app.use(express.static(__dirname+'/public'));

var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});

reload(server, app);

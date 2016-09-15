'use strict';

var gzippo = require('gzippo'),
    express = require('express'),
    app = express();

  app.use(gzippo.staticGzip("" + __dirname + "/dist"));
  app.set('port', (process.env.PORT || 5000));
  app.use(express.static(__dirname + '/public'));
  // views is directory for all template files
  app.set('views', __dirname + '/views');
  //app.set('view engine', 'ejs');
  app.set('view engine', 'jade');


  app.listen(app.get('port'), function() {
    console.log('The party is happening on port ', app.get('port'));
  }).listen(5000);

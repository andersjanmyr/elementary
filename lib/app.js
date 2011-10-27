(function() {
  var app, express, jade, port, timestamp;
  express = require('express');
  jade = require('jade');
  app = express.createServer();
  app.configure(function() {
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static("" + __dirname + "/../public"));
    app.set('views', "" + __dirname + "/../views");
    app.set('view engine', 'jade');
    return app.set('view options', {
      layout: false
    });
  });
  app.get('/', function(req, resp) {
    return resp.render('index');
  });
  port = process.env.PORT || process.env.VMC_APP_PORT || 4000;
  console.log(process.env);
  console.log("Starting on port " + port);
  console.log("Serving files from " + __dirname + "/../public");
  app.listen(port);
  timestamp = function() {
    var d, date, time;
    d = new Date;
    date = "" + (d.getFullYear()) + "-" + (d.getMonth() + 1) + "-" + (d.getDate());
    time = "" + (d.getHours()) + ":" + (d.getMinutes()) + ":" + (d.getSeconds());
    return "" + date + " " + time;
  };
}).call(this);

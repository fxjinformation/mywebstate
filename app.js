var express = require('express');
var app = express();

app.use(express.static('public'));


app.use(function(req, res) {
	res.redirect("./404.html");
});

app.use(function(err,req,res,next){
	console.log(err.stack);
	res.status(500).redirect("./500.hmtl");
});

process.on("uncaughtException",function(){
	console.error(err.stack);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('服务启动成功 http://%s:%s', host, port);
});
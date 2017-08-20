<<<<<<< HEAD
var express = require('express');
var mysql=require('mysql');
var path= require('path');
var bodyParser= require('body-parser');
var app=express();



app.use(express.static(__dirname));



app.get('/',function(req,res){
  res.sendFile(path.join(__dirname + '/ind.html'));

});
var connection=mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'dench'
});
connection.connect(function(error){
	if(!!error){
		console.log("Error");
	}
	else{
		console.log("Connected");
	}
});
app.get('/addAnnotation',function(req,res){
 data=connection.query("select * from annotation",function(err,result){
	res.send(result);
 });

});
app.get('/getVideos',function(req,res){
 data=connection.query("select * from tag",function(err,result){
	res.send(result);
 });

});

app.use(bodyParser.json());
app.post('/addAnnotation',function(req,res){
connection.query("insert into annotation values('"+req.body.context+"',"+req.body.start+","+req.body.end+","+req.body.top+","+req.body.left+","+req.body.height+","+req.body.width+",'"+req.body.video_id+"',"+req.body.video_start+","+req.body.video_end+")");
var response = {
    status  : 200,
    success : 'Updated Successfully'
}
res.end(JSON.stringify(response));
});
app.post('/addTest',function(req,res){
console.log("insert into test values('"+req.body.optiona+"','"+req.body.optiona+"','"+req.body.optiona+"','"+req.body.optiond+"')");
connection.query("insert into test values('"+req.body.optiona+"','"+req.body.optionb+"','"+req.body.optionc+"','"+req.body.optiond+"')");
var response = {
    status  : 200,
    success : 'Updated Successfully'
}
res.end(JSON.stringify(response));
});
=======
<<<<<<< HEAD
var express = require('express');
var mysql=require('mysql');
var path= require('path');
var bodyParser= require('body-parser');
var app=express();



app.use(express.static(__dirname));



app.get('/',function(req,res){
  res.sendFile(path.join(__dirname + '/ind.html'));

});
var connection=mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'dench'
});
connection.connect(function(error){
	if(!!error){
		console.log("Error");
	}
	else{
		console.log("Connected");
	}
});
app.get('/addAnnotation',function(req,res){
 data=connection.query("select * from annotation",function(err,result){
	res.send(result);
 });

});
app.get('/getVideos',function(req,res){
 data=connection.query("select * from tag",function(err,result){
	res.send(result);
 });

});

app.use(bodyParser.json());
app.post('/addAnnotation',function(req,res){
connection.query("insert into annotation values('"+req.body.context+"',"+req.body.start+","+req.body.end+","+req.body.top+","+req.body.left+","+req.body.height+","+req.body.width+",'"+req.body.video_id+"',"+req.body.video_start+","+req.body.video_end+")");
var response = {
    status  : 200,
    success : 'Updated Successfully'
}
res.end(JSON.stringify(response));
});
app.post('/addTest',function(req,res){
console.log("insert into test values('"+req.body.optiona+"','"+req.body.optiona+"','"+req.body.optiona+"','"+req.body.optiond+"')");
connection.query("insert into test values('"+req.body.optiona+"','"+req.body.optionb+"','"+req.body.optionc+"','"+req.body.optiond+"')");
var response = {
    status  : 200,
    success : 'Updated Successfully'
}
res.end(JSON.stringify(response));
});
=======
var express = require('express');
var mysql=require('mysql');
var path= require('path');
var bodyParser= require('body-parser');
var app=express();



app.use(express.static(__dirname));



app.get('/',function(req,res){
  res.sendFile(path.join(__dirname + '/sd.html'));

});
var connection=mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'dench'
});
connection.connect(function(error){
	if(!!error){
		console.log("Error");
	}
	else{
		console.log("Connected");
	}
});
app.get('/addAnnotation',function(req,res){
 data=connection.query("select * from annotation",function(err,result){
	res.send(result);
 });

});
app.get('/getVideos',function(req,res){
 data=connection.query("select * from tag",function(err,result){
	res.send(result);
 });

});

app.use(bodyParser.json());
app.post('/addAnnotation',function(req,res){
connection.query("insert into annotation values('"+req.body.video_id+"',"+req.body.start+","+req.body.end+","+req.body.height+","+req.body.width+","+req.body.top+","+req.body.left+")");
});
>>>>>>> Final Commit
>>>>>>> Final
app.listen(8080);
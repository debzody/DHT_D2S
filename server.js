//var sys = require( 'sys' );
//    spawn = require('child_process').spawn,
//    x = spawn('python', ['dht11_example.py']);
    
    
//x.stdout.on('data', function(data){
//    sys.print(data.toString());
//});

//my code

//~ var http = require('http');

const express = require('express');
const app = express();


app.get('/', function(req, res) {
	//res.send('hello world')
	//res.setHeader('connection','Transfer-Encoding');
	res.setHeader('Content-Type' , 'application/json; charset=utf-8')
	res.setHeader('Access-Control-Allow-Origin', '*');
	var pyshell1 = require('python-shell');
    pyshell = new pyshell1('dht11_example.py');
	pyshell.on('message', function(message) {console.log(message);
		res.send(message);
		});
	pyshell.end(function(err){
		if(err){
			throw err;
		};
				
	//spawn = require('child_process').spawn;
     //x = spawn('python', ['dht11_example.py']);
    //x.stdout.on('data', function(data){

    //temp=data.toString();
     console.log("running");
     //res.write("running");
     });

	});
	 
//function onRequest(request, response){
  //console.log("requested" + request.url);
  //temp = "";
 //spawn = require('child_process').spawn;
 //x = spawn('python', ['dht11_example.py']);
//x.stdout.on('data', function(data){
////sys.print(data.toString());
//temp=data.toString();
//console.log(temp);
//});
////if(temp){
////response.write(data);
////}
//response.writeHead(200, {"Context-Type": "text/plain"});
//response.write(temp);

//response.end();
//}

//~ http.createServer(onRequest).listen(8888);
app.listen(8888 ,() =>
console.log("server is running")
)

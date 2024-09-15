var http=require('http');
var url=require('url');
var qs=require('querystring');
var cal=require('./calmodule.js');

http.createServer(function(req,res){
    let rurl=url.parse(req.url);
    let q=qs.parse(rurl.query);
    if(rurl.pathname=='/add'){
        res.writeHead(200,{"content-type": "text/html"});
        res.write('<html><body><center><h1 style="background: aliceblue;"> Addition : '+cal.add(parseInt(q['num1']),parseInt(q['num2']))+'</h1></center></body></html>');
        res.end();
    }
    else if(rurl.pathname=='/sub'){
        res.writeHead(200,{"content-type": "text/html"});
        res.write('<html><body><center><h1 style="background: aliceblue;"> Subraction : '+cal.sub(parseInt(q['num1']),parseInt(q['num2']))+'</h1></center></body></html>');
        res.end();
    }
    else if(rurl.pathname=='/mul'){
        res.writeHead(200,{"content-type": "text/html"});
        res.write('<html><body><center><h1 style="background: aliceblue;"> Multiplication : '+cal.mul(parseInt(q['num1']),parseInt(q['num2']))+'</h1></center></body></html>');
        res.end();
    }
    else if(rurl.pathname=='/div'){
        res.writeHead(200,{"content-type": "text/html"});
        res.write('<html><body><center><h1 style="background: aliceblue;"> Division : '+cal.div(parseInt(q['num1']),parseInt(q['num2']))+'</h1></center></body></html>');
        res.end();
    }
    else{
        res.writeHead(200,{"content-type": "text/html"});
        res.write('<html><body><h1 style="background: aliceblue;"> Invalid request url </h1></body></html>');
        res.end();
    }
}).listen(5500);
console.log('server started');

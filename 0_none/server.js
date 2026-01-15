var http = require('http');
var fs = require('fs');
var route = require('url');
const querystring = require('querystring');

function handleServer(req, res){
    var path = route.parse(req.url, true);

    if(req.url === '/'){
        res.writeHead(200, {"Content-Type" : "text/html"});
        fs.createReadStream('./index.html').pipe(res);
    }else if(path.pathname === '/query/'){
        console.log(req.method);

        //PATTERN CODE
        //it takes element from a form 
        const parsed = route.parse(req.url);
        const query  = querystring.parse(parsed.query);
        array.splice(3, 1);
        res.writeHead(200, {"Content-Type" : "text/html"});
        function resolveAfter1Seconds(val) {
          return new Promise(resolve => {
            setTimeout(() => { resolve(val); }, 1000);
          });
        }

        async function asyncCall(val) {
            var result = await resolveAfter1Seconds(val);
            function getX(x){
                return x;
            }
            const boundGetX = getX.bind();
            const _bound_out = boundGetX(result);
            res.write(_bound_out);
        }

        asyncCall(query.name);
        res.end();
    
    }else{
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end('Page not found');
    }
}

http.createServer(handleServer).listen(8080);
console.log('Server running on port 8080.');

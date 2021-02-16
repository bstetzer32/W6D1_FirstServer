const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
// console.log(events.js)
if ( req.url === "/OK") {
    console.log("Inbound 'OK' request being processed...");
    res.writeHead(200);
} 

else if ( req.url === "/htmlstuff") {
    let read = fs.readFileSync('./htmlstuff.html');
    res.writeHead(200, {"Content-Type" : "text/html"});
    res.write(read);
}

else if ( req.url === "/htmlstuff" && req.method === post) {
    let read = fs.readFileSync('./htmlstuff.html');
    res.writeHead(200, {"Content-Type" : "text/html"});
    res.write(read);
}

else if ( req.url === "/") {
    console.log("Inbound 'OK' request being processed...");
    res.writeHead(200);
}

else if(req.url === "/Bad-Request") {
    console.log(`400 Bad Request`);
    res.writeHead(400, {"Content-Type" : "text/html"});
    res.write("<h1> 400 Bad Request </h1>")
}

else if(req.url === "/Created") {
    console.log(`201 Created`);
    res.writeHead(201, {"Content-Type" : "text/html"});
    res.write("<h1> 201 Created </h1>")
}

else if(req.url === "/Forbidden") {
    console.log(`403 Forbidden, attemped access by`);
    res.writeHead(404, {"Content-Type" : "text/html"});
    res.write("<h1> 404 Page Not Found! </h1>")
}

else if(req.url === "/Found") {
    console.log(`302 Found`);
    res.writeHead(302, {"Content-Type" : "text/html"});
    res.write("<h1> 302 Page Found, Redirecting </h1>")
}

else if(req.url === "/Gateway-Timeout") {
    console.log(`504 Gateway-Timeout`);
    res.writeHead(504, {"Content-Type" : "text/html"});
    res.write("<h1> 504 Gateway-Timeout </h1>")
}

else if(req.url === "/Internal-Server-Error") {
    console.log(`500 Internal-Server-Error`);
    res.writeHead(500, {"Content-Type" : "text/html"});
    res.write("<h1> 500 Internal-Server-Error </h1>")
}

else if(req.url === "/Moved-Permanently") {
    console.log(`301 Moved-Permanently`);
    res.writeHead(301, {"Content-Type" : "text/html"});
    res.write("<h1> 301 Moved-Permanently </h1>")
}

else if(req.url === "/Unauthorized") {
    console.log(`401 Unauthorized`);
    res.writeHead(401, {"Content-Type" : "text/html"});
    res.write("<h1> 401 Unauthorized </h1>")
}

else if(req.url === "/Redirect") {
    console.log(`301 /Redirect`);
    res.writeHead(301, {"Content-Type" : "text/html"});
    res.write("<h1> 301 /Redirect </h1>")
}

else if(req.url === "/Webpage") {
    console.log(`200 Webpage`);
    res.writeHead(200, {"Content-Type" : "text/html"});
    res.write("<p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. in turpis pulvinar facilisis. Ut felis.</p>")
}

else {
    console.log("404 Page not found!");
    res.writeHead(404);
}





    res.end();
}).listen(3000, () => {
        console.log('Is listening on port: 3000')
})

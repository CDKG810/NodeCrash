const http = require('http');
const fs = require('fs');

const dburi = mongodb+srv://netninja:<db_password>@nodetuts.e43nb.mongodb.net/?retryWrites=true&w=majority&appName=NodeTuts

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    //set header content type
    res.setHeader('content-Type', 'text/html')

    let path = './views/';
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
                path += 'about.html';
                res.statusCode = 301;
                res.setHeader('location', '/about');
                res.end();
                break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    // send a html file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
           //res.write(data);
            res.statusCode = 200;
            res.end(data);
        }
    })
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
})
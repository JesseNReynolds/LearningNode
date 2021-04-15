// try loading about in one window then quickly load home in another
const http = require('http');

const server = http.createServer((req, resp) => {
    if(req.url === '/'){
        resp.end('Home Page')
    }
    else if(req.url === '/about') {
        // blocking code!
        for(let i = 0; i < 1000; i++) {
            for(let j = 0; j < 1000; j++) {
             console.log(`${i}${j}`)
            }
        }
        resp.end('About Page')
    }
    else {
        resp.end('Error Page')
    }


})

server.listen(5000, () => {
    console.log('server is listening on port 5000')
})
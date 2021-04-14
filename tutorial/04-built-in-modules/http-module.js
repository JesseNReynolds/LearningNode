const http = require('http')

const server = http.createServer((req, res) => {
    
    if(req.url === '/') {
        res.end('Welcome to the homepage')
    } if(req.url === '/about'){
        res.end('An about page')
    } else {
        res.end(`
            <h1>Oops!</h1>
            <p>We can't find that page!</p>
            <a href="/">back home</a>
        `)}
})

// define port to listen on
server.listen(5000)
// HTTP wont talk about for too long

// all work ahead will revolve around server setup aka HTTP related
// will be covered in far greater detail later

// why bother now at all?
// to show core node features now in action to have a 
// visual representation instead of just slides

const http = require('http');

const server = http.createServer((req,res) => {
    // this is all quick code and is not going to be what
    // code for an API or Website will look like
    
    // req is the incoming request can be named whatever but
    // common practice is req
    // console.log(req)
    if(req.url === '/')
    {
        // res is the response can also be named whatever
        // common practice is res
        res.end('Welcome to our home page')
    }
    if(req.url === '/about')
    {
        res.end('Here is our short history')
    }
    res.end(`
        <h1>Oop!</h1>
        <p> we cant seem to find the page</p>`
    )
    // res.write('Welcome to our home page')
    // res.end()
})

// port for the server
server.listen(5000)
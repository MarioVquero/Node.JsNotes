const http = require('http')
const fs = require('fs')
const PORT = 3000

// video referenced
// https://www.youtube.com/watch?v=VShtPwEkDD0

const server = http.createServer(function (req,res) {
    // if all goes well tells the browser to parse the info received as HTML 
    res.writeHead(200, { 'Content-Type': 'text/html'})
    fs.readFile('index.html', function(error, data) {
        if (error) {
            res.writeHead(404)
            // for simplicity just this message, should have its own
            // page in a real project
            res.write('Error: File not found')
        }else{
            res.write(data)
        }
        res.end()
    })
})

server.listen(PORT, function(error){
    if (error) {
        console.log(`Someting went wrong ${error}`)
     }else{
        console.log(`Server is listening on port ${PORT}`)
     }
})
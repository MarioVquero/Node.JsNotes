// a synchronous
const {readFile, writeFile, read, write} = require('fs')

console.log('start')
// provide a callback when were done
// kind of how event listeners work
// needs encoding of utf8 or else you get a buffer instead of the text 
readFile('./Content/first.txt','utf8', (err,result) => {
    if(err) {
        console.log(err)
        return
    }
    const first = result;
    readFile('./Content/second.txt','utf8', (err,result) => {
        if(err){
            console.log(err)
            return
        }
        const second = result
    
        writeFile(
            './Content/result-async.txt',
            `Here is the result : ${first}, ${second}`,
            (err, result) => {
                if(err) {
                    console.log(err)
                    return
                }
                console.log('done with this task')
            }
        )
    })
})
console.log('starting next task')

// offloads task so that multiple users can use it unlike sync

// alternatives are using promises or async await
// reading files are just an example as they would take some time 
// promises and async await will be talked about later in the series

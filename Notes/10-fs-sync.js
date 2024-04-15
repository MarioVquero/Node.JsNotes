// FS Module
// synchronous

const {readFileSync, writeFileSync, write} = require('fs');
console.log('start')

// alternative
// const fs = require('fs');
// fs.read
// does the same thing as the first line but put in differently


const first = readFileSync('./Content/first.txt', 'utf8')
const second = readFileSync('./Content/second.txt', 'utf8')

// will show the contents of both first.txt and second.txt in the console
// console.log(first, second)

// will create a file (if there isnt one) called result-sync.txt
// with the contents of "Here is the result: first and second"
// will replace any contents of the file if they are different
writeFileSync(
    './Content/result-sync.txt', 
    // with flag:a it will append the content
    `Here is the result : ${first}, ${second}`, 
    { flag:'a' } 
)

console.log('done with the task')
console.log('starting the next task')
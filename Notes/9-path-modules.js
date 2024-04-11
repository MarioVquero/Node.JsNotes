const path = require('path')

// .sep seperates 
console.log(path.sep)

// .join joins a sequence of path segments using the seperator as teh limiter
// returns a normalized resulting path
const filePath = path.join('/Content','Subfolder', 'test.txt')
console.log(filePath)


//returns the last thing in a path
const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname,'Content','Subfolder','test.txt')
console.log(absolute)
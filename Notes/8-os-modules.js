// Built in Modules

// OS
// Operating system Module

// PATH 
// 

// FS
// File System Module

// HTTP 
// HTTP module for Setting up a server


// Not the only built in modules but just some big ones 

// To find more built in methods and modules refer to the docs 
// Link: https://nodejs.org/docs/latest/api/
// on the same site you can also change versions (not the same link)


// because built in dont need './' infront of the name
const os = require('os')


// Info about current user
const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)


const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),

}

console.log(currentOS)
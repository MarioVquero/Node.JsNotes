// npm --version to check what version of NPM you have


// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency
// npm install -g <packageName> 
// sudo npm install -g <packageName> (mac)


// package.json - manifest file (stores important info about project/package)


const _ = require('lodash')
// different from node packages must always install first
// or else Node wont be able to find it

const items = [1,[2,[3,[4]]]]

// testing dependincies 
// video explains what to do with them and why you need 
// them.

// code bellow organizes the array and returns 1 array
// instead of the mess above using lodash
// specifically the function flattenDeep()
const newItems = _.flattenDeep(items)
console.log(newItems)


//////////////////////////////////////////////////////////
// ALL DEPENDENCIES DOWNLOADED ARENT NECESSARY AND WILL //
// PROBABLY GET DELETED                                 //
//////////////////////////////////////////////////////////
// Common JS - every file is a module (by default)
//Modules Encapsulated code - Only share the minimum 

//modules make it easier to have smaller files and a better structure to our application

//import the modules by routing them to the correct file
const names = require('./4-FirstModuleNames')
const sayHi = require('./5-SecondModuleUtils')

//import altenative function that does the same as this script but slightly different
const data = require('./6-alternativeFlavor')

console.log(data)

// with the function imported from "sayHi" run it with the data from "names"
sayHi('Susan')
sayHi(data.personList.name)
sayHi(names.Peter)



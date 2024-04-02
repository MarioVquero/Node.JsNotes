// Common JS - every file is a module (by default)
//Modules Encapsulated code - Only share the minimum 

const names = require('./4-FirstModule')
const sayHi = require('./5-SecondModule')

const data = require('./6-alternativeFlavor')
console.log(data)

sayHi('Susan')
sayHi(data.personList.name)
sayHi(names.Peter)
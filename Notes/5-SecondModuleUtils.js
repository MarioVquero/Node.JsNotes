// function initially in one script but moved here to show how modules work
// can be used by any module
const sayHi = (name) => {
    console.log(`hello there ${name}`)
}

// export the function for the other modules
module.exports = sayHi
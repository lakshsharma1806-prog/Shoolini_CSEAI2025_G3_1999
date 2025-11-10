// var name = 5
// keyword variableName = value
// var/let/const

// VAR -->
// console.log(name)
// console.log(first)
// Hoisting possible
// var name = 5
// var name = "Shrey" -- redeclaration possible
// name = "Rohit" -- reinitialization possible


// LET -->
// console.log(name) Cannot access 'name' before initialization
// console.log(first) first is not defined
// let name = "Shrey"
// let name = "Rohit" -- redeclaration not possible
// name = "Rohit" -- reinitialization possible


// CONST -->
// console.log(name)
// const name = "Shrey"
// const name = "Rohit" -- redeclaration not possible
// name = "Rohit" -- reinitialization possible

fetch("https://jsonplaceholder.typicode.com/users")
.then(rawData => rawData.json())
.then(res => console.log(res))
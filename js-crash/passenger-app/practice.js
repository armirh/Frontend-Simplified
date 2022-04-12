// 1. create two variables, firstName and lastName
// Concatenate them into a third variable fullName
// console.log

let firstName = "Armir"
let lastName = "Halimi"
let fullName = firstName + " " + lastName

console.log(fullName)


// 2. Create a function that logs out "Hi there, Armir!" when called

function greeting(){
    let greeting = "Hi there, "
    console.log(greeting + firstName + "!")
}


// 3. create two functions, addPoints() and removePoints()
// add/remove points to/form the myPoints variable

let myPoints = 3

function add3Points(){
    myPoints += 3
}
function remove1Point(){
    myPoints -= 1 
}

add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()
// getting number 10
console.log(myPoints)


// 4. 
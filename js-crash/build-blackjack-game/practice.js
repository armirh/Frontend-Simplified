// check if the person is eligble for a birdthday card from the king

let age = 101

// Triple === more strict than dobuble ==

if (age === 100) {
    console.log("Here is your birthday card from the King!")
} else if( age >= 100) {
    console.log("You already got one")
} else {
    console.log("Still not eligble for the card!")
}

// Arrays - ordered list of items

let featuredPosts = ["check out my page", 
                    "source code", 
                    "github code", 
                    "relaunched portfolio"]

let linkedinElements = ["2 years experience",
                        "University of Houston-Clear Lake",
                        "Data structures and Algorithms",
                        "Python, Django",
                        "Communication"]

console.log(linkedinElements[1]) // index 1 = picks second element
console.log(linkedinElements.length) // counts all elements = 5

// arrays are composite / complex data type
// we can mix data types in one array

let myProfile = ["Armir", 25, true]
console.log(myProfile)

//array methods
myProfile.push(1, "One") // add elements at the end of the list
console.log(myProfile)

myProfile.pop() // removes the last element
console.log(myProfile)



// for loop

for (let count = 10; count < 21; count += 1) {
    console.log(count)
}

// create a loop that counts from 10 to 100 in steps of 10
// log out the numbers

for (let i = 10; i <=100; i += 10){
    console.log(i)
}
console.log("Script named: test.js");

// Creating an Array
let names = ["Victoria", "Mark", "Mike", "Phil"];
console.log(names); // Printing the Array

// Mixed Array
let mixed = [99, "Derek", true, null, 45, "Hello"];
console.table(mixed);

// For loop with an Array (Inside a function)
function displayNames(){
    for (let i = 0; i < names.length; i++){
        console.log(names[i]);
    }
}
displayNames();

let ages = [55 ,45, 23, 34, 55, 78];
console.log(ages)
//travel the ages array
function displayAges(){
    for (let i = 0; i < ages.length; i++){
        console.log(ages[i]);
    }
}
displayAges();


let student={
    name:"Joey",
    age: 14,
    student: true,
    grade: "A-",
    music:["Eminem", "Coldplay", "Rolling Stones"],
    adress:{
        city: "San Diego",
        country: "USA"
    }
}

console.log(student)

// Prints the property. use [""]
console.log(student["name"]); //Prints name
console.log(student["age"]); // Prints age
console.log(student["student"]); // Prints age
console.log(student["grade"]); // Prints age

console.log(student["adress"].country);
console.log(student.music[0]);
console.log(student.music)

let students=[
    {
        name:"Guillermo",
        age:24,
        activeStudent:true
    },
    {
        name:"Arturoo",
        age:23,
        activeStudent:false
    },
    {
        name:"Mark",
        age:30,
        activeStudent:false
    },
]
console.log(students);
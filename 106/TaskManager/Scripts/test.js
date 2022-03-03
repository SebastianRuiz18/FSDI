function Dog(name, age){
    this.name = name;
    this.age = age;
}
class Cat{
//     // Auto called when creating objects
    constructor(name, age, color){
        this.name = name;
        this.age = age;
        this.color = color;

    }
}

// function objects(){
    // Object literal
    let d1 = {
        name: "Fido",
        age: 3
    };
    let d2 = {
        name: "Lola",
        age: 4
    };
    console.log(d1);
    console.log(d2);

//     // Object constructor
    let d3 = new Dog("Dude", 1);
    let d4 = new Dog("Pal", 3);
    console.log(d3, d4);

     // Classes
    let c1 = new Cat("Dr. Mewsalot", 3 ,"White");
    let c2 = new Cat("Sir WhiscazZz", 2, "Black");
    console.log(c1, c2);
}

function testRequest(){
    // how to request
    $.ajax({
        type: "GET",
        url: "https://restclass.azurewebsites.net/api/test",
        success: function(response){
            console.log("Server says: ", response);
        },
        error: function(error){
            console.log("Req failed: ", error);
        }
    });
}

// Executing the function
// objects();

// testRequest();





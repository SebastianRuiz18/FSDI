function loadData(){
    console.log("Loading from server!");
}

function sayHelloToAPerson(name){
    console.log("Hi there, " + name);
}

function sum(num1, num2){
    let res = num1 + num2;
    console.log(`Result is: ${res}`);
    return res;

    console.log("below a return");

}

function testValidation(){
    let num = 9;

    if(num < 10){
        console.log("Error, num to low");
        return;
    }

    console.log("Saved!");

}
testValidation()

function init(){
    console.log("DOM ready");

    // INIT is for:
    // 1. Assign CATCH EVENTS
    // 2. LOAD PREVIOUS DATA
    loadData();
    
    sayHelloToAPerson("Bob");
    sayHelloToAPerson("Jose");
    sayHelloToAPerson("Ivan");

    // Make it work
    let result = sum(21, 21); // 42
    console.log(result)

    // for loops
    function printSomeNumbers(){
        for (let i = 1; i <= 20; i++) {
            if(i==7 || i==13){
                i++;
                console.log("For loop: " + i)
            }else{
                console.log("For loop: " + i);
            }
        }
    }
    printSomeNumbers(); // Nums from 0 to 20

    function numSomeNumbers(){
        var c = 0;
        let list = [12,32,12,456,12,87,345,56,3,7,5678,2,4587,243,09,234,-3,4567,-9,0];
        for (let i = 0; i < list.length; i++) {
            let num = list[i];
            c += num;
            
            console.log("Sum is: " + c);
        }
        c=0;
        // Find the biggest number
        for (let i = 0; i < list.length; i++) {
            let num = list[i];
            if(num > c){
                c = num;
            }
        }
        console.log("Biggest number is: " + c);
        c=0;
        // Find the smallest
        for (let i = 0; i < list.length; i++) {
            let num = list[i];
            if(num < c){
                c = num;
            }
        }
        console.log("Smallest number is: " + c);
    }
    numSomeNumbers(); // let list = [12,32,12,456,12,87,345,56,3,7,5678,2,4587,243,09,234,-3,4567,-9,0];

}

//when browser finishes rendering all the HTML, do this
window.onload=init;
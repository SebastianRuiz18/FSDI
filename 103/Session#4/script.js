// Console log test
//console.log("Session #4: Script");

// Function Creation
//function test(){
//    console.log("Function");
//}

// Calling The Function
//test();

// Function recieving a Variable and returning something
let traveling = function(){
    let city = document.getElementById("txtCity").value;
    document.getElementById("travels").innerHTML+=`<li>Traveling to ${city}</li>`; // += means appending elements..... = alone would replace.
}

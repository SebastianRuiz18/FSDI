function saveUser(user){
    console.log(user); // This is the Obj
    let val=JSON.stringify(user); // Parse into a JSON string
    console.log(val); // This is the string in JSON
    localStorage.setItem("users", val); // Send it to localStorage
}

function readUsers(){

}
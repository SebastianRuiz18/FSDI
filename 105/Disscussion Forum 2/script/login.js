function login(){
    console.log("Executing login function ...");
    
    let username = $("#txtUsername").val(); 
    let pass = $("#txtPassword").val();

    let users=readUsers();
    let flag = false;
    for(let i = 0; i < users.length; i++){
        // This is the var === this is localStorage
        if(username === users[i].email && pass === users[i].password){
            console.log("Correct Username!");
            flag = true;
            window.location="home.html";
        }
    }

    if(!flag){
        console.log("Invalid Credentials");
        $("#alertError").removeClass("hide");
        setTimeout(function(){
            $("#alertError").addClass("hide");
        },3000)
    }
}

function init(){
    console.log("Login script");
    // Hooking events
    $("#btnLogin").click(login);
}

window.onload=init;
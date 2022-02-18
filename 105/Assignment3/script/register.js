// Create the constructor ES2025 / Class
class User{
    constructor(email, password, first, last, age, address, phone, payment, color){
        this.email=email;
        this.password=password;
        this.fname=first; // **
        this.lname=last; // **
        this.age=age;
        this.address=address;
        this.phone=phone;
        this.payment=payment;
        this.color=color;

    }
}

function isValid(user){
    // Return FALSE when user is NOT valid
    // Return TRUE when user IS valid
    let valid = true;
    // Clear the alerts
    $("input").removeClass("alert-error");
    // Validations
    if(user.email.length == 0){
        // If the email its empty
        valid = false;
        $("#txtEmail").addClass("alert-error");
        console.log("Invalid E-mail!");
    }
    if(user.password.length == 0){
        // If the password its empty
        valid = false;
        $("#txtPassword").addClass("alert-error");
        console.log("Invalid Password!");
    }
    if(user.fname.length == 0){
        // If the Fname its empty
        valid = false;
        $("#txtFirst").addClass("alert-error");
        console.log("Invalid First name!");
    }
    if(user.lname.length == 0){
        // If the Lname its empty
        valid = false;
        $("#txtLast").addClass("alert-error");
        console.log("Invalid Last name!");
    }

    return valid;
}

function registerUser(){
    let email = $("#txtEmail").val(); // *Check your id on the HTML
    let password = $("#txtPassword").val();
    let first = $("#txtFirst").val();
    let last = $("#txtLast").val();
    let age = $("#txtAge").val();
    let address = $("#txtAddress").val();
    let phone = $("#txtPhone").val();
    let payment = $("#selPayment").val();
    let color = $("#txtColor").val();

    let user = new User(email, password, first, last, age, address, phone, payment, color);
    // Validate the user
    if(isValid(user)){
        saveUser(user);
    }

}

function clearForm(){
    $("#btnClear").click(function() {
        $("#txtEmail").val("");
        $("#txtPassword").val("");
        $("#txtFirst").val("");
        $("#txtLast").val("");            
        $("#txtAge").val("");
        $("#txtAddress").val("");
        $("#txtPhone").val("");
        $("#txtColor").val("rgb: 0 0 0")
        console.log("Inputs Reseted")
    });
}


function init(){
    console.log("Init Register");
    // hook events
    $("#btnRegister").click(registerUser);
}
window.onload=init;
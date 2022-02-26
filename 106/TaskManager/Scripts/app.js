var nonImportantClass = "far fa-star";
var importantClass = "fas fa-star";
var isImportant = false;

var isFormVisible = false;

function toggleImportant(){
    if(isImportant){
        // Non important
        $("#iImportant").removeClass(importantClass);
        $("#iImportant").addClass(nonImportantClass);
        console.log("NOT important");
        isImportant = false;
    }
    else{
        // Important
        $("#iImportant").removeClass(nonImportantClass);
        $("#iImportant").addClass(importantClass);
        console.log("IS important");
        isImportant = true;
    }
}

function toggleForm(){
    if(isFormVisible){
        $("#form").show();
        isFormVisible = false;
    }
    else{
        $("#form").hide();
        isFormVisible = true;
    }
}

function init(){
    console.log("Task Manager");
    // events
    $("#iImportant").click(toggleImportant);
    $("#btnToggleForm").click(toggleForm);

    // load data
}

window.onload=init;
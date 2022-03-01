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

function clearForm(){
    $("#txtTitle").val("");
    $("#selDate").val("");
    $("#txtControl").val("");
    $("#selLocation").val("");
    $("#txtDescription").val("");
    $("#selColor").val("");
}

function saveTask(){
    console.log("Task Saved!");

    let title = $("#txtTitle").val();
    let dueDate = $("#selDate").val();
    let contact = $("#txtControl").val();
    let location = $("#selLocation").val();
    let description = $("#txtDescription").val();
    let color = $("#selColor").val();

    // Validate
    if(title.length < 1){
        //ERROR
        alert("Insert a Title!");
        return;
    }
    if(!dueDate){
        //ERROR
        alert("Insert a Date!");
        return;
    }
    
    let task = new Task(isImportant, title, dueDate, contact, location, description, color);
    console.log(task);

    // Save the task

    // Display
    displayTask(task);

    // Clear the form
    clearForm();
}



function displayTask(task){
    // create the syntax
    let syntax = `<div class="tasks" style="background-color: ${task.color}; ">
        
        <button onclick="deleteTask()" class="btn btn-sm btn-danger"><i class="fa fa-window-close"></i></button>
        
        <h5 class="display-5">${task.title}</h5>
        <p class="h6">${task.description}</p>

        <div>
            <label class="task-detail">DATE: ${task.dueDate} </label>

            <label class="task-detail">LOCATION: ${task.location} </label>
            <label class="task-detail">CONTACT: ${task.contact} </label>
        </div>

    </div>`;

    // append the syntax to an element on the screen
    $("#tasks-list").append(syntax);
}

function deleteTask(){
    console.log("Task deleted");
}

function init(){
    console.log("Task Manager");
    // events
    $("#iImportant").click(toggleImportant);
    $("#btnToggleForm").click(toggleForm);
    $("#btnSaveTask").click(saveTask);

    // load data
}

window.onload=init;
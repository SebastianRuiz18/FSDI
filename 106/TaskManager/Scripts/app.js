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
    $("#selColor").val("#000000");
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
    let dataStr = JSON.stringify(task);
    console.log(task);
    console.log(dataStr);

    // Save the task
    $.ajax({
        type: "POST",
        url: "https://fsdiapi.azurewebsites.net/api/tasks/",
        data: dataStr,
        contentType: "application/json",
        success: function(data){
            console.log("Save res: ", data);
            let savedTask = JSON.parse(data);

            // Display
            displayTask(savedTask);
        },
        error: function(error){
            console.log("Save failed", error);
        }
    });

    

    // Clear the form
    clearForm();
}



function displayTask(task){
    // create the syntax
    let syntax = `<div id="${task._id}" class="tasks" style="background-color: ${task.color}; ">
        
        <button onclick="deleteTask('${task._id}')" class="btn btn-sm btn-danger"><i class="fa fa-window-close"></i></button>
        
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

function deleteTask(id){
    console.log("Task deleted", id);
    $("#" + id).remove();
    // http DELETE request with the id
}

function deleteAllData(){

    $.ajax({
        type: "DELETE",
        url: "https://fsdiapi.azurewebsites.net/api/tasks/clear/SebastianCh26",
        success: () => {
            console.log("DATA CLEARED!!!!!!");
            $("#tasks-list").html(""); // Clear the contents of the Div
        },
        error: (details) => {
            console.log("Clear FAILED", details);
        }
    })
}
// DELETE https://fsdiapi.azurewebsites.net/api/tasks/clear/"SebastianCh26"

function retrieveTasks(){

    $.ajax({
        type: "GET",
        url: "https://fsdiapi.azurewebsites.net/api/tasks",

        success: function(response){
            let list = JSON.parse(response); // from string to object
            // For loop and print every task
            for (let i = 0; i < list.length; i++) {
                let task = list[i];
                if(task.name == "SebastianCh26"){
                    displayTask(task);
                }
            }
        },
        error: (error) => {
            console.log("Retrieve failed", error);
        }
    });


}
function init(){
    console.log("Task Manager");
    // events
    $("#iImportant").click(toggleImportant);
    $("#btnToggleForm").click(toggleForm);
    $("#btnSaveTask").click(saveTask);
    $("#btnDeleteAllData").click(deleteAllData);

    // load data
    retrieveTasks();
}

window.onload=init;
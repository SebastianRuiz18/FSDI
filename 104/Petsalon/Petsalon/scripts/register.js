
let salon={
    name:"Enchulame el Perro",
    adress:{
        street:"Av. University",
        ZIPcode:"22414",
        number:"262-K"
    },
    hours:{
        open:"9:00 am",
        close:"5:00 pm"
    },
    pets:[]
}

function displayPetsNames(){
    for (let i = 0; i < salon.pets.length; i++){
        console.log(salon.pets[i].name);
        document.write(`Pet ${i+1}: ${salon.pets[i].name}<br>`);
    }
}

// Create the constructor
function Pet(name, age, gender, breed, service, owner, contact){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.owner=owner;
    this.contact=contact;
}

// Getting inputs from the HTML
let petName = document.getElementById("txtName");
let petAge = document.getElementById("txtAge");
let selGender = document.getElementById("selGender");
let petBreed = document.getElementById("txtBreed");
let petOwner = document.getElementById("txtOwner");
let petContact = document.getElementById("txtContact");
let selService = document.getElementById("selService");

function register(){
    console.log("Register");
    //create an obj
    let thePet = new Pet(petName.value, petAge.value, selGender.value, petBreed.value, selService.value, petOwner.value, petContact.value);
    console.log(thePet);
    //push the obj into the array
    salon.pets.push(thePet);
    //display the array
    console.log(salon.pets);
    //alert
    showPetsCards();
    alert("New pet registered!")
}

// Clear The Fields
function ClearFields(){
    document.getElementById("txtName").value = "";
    document.getElementById("txtAge").value = "";
    document.getElementById("txtBreed").value = "";
    document.getElementById("txtOwner").value = "";
    document.getElementById("txtContact").value = "";
}

function showPetsCards(){
    document.getElementById("btnClear").style.display = "none";
    // Clear "Search Result" h2
    document.getElementById("headerList").innerHTML="";
    // Clear the field
    document.getElementById("petList").innerHTML="";
    // Travel the array (loop)
    for(let i=0; i < salon.pets.length;i++){
        // Create the card and append the tmp into the HTML
       document.getElementById("petList").innerHTML+=createCard(salon.pets[i], i);

    }
}

function removePet(index, i){
    if(index < salon.pets.length)
    {
        salon.pets.splice(index, 1);
        alert(`Pet ${index} Removed!`)
    }
    else
    {
        alert("Pet is non existent!")
    }
    showPetsCards();
}

function searchPet(){
    document.getElementById("btnClear").style.display = "inline-block";
    let name = document.getElementById(`txtSearch`).value;
    document.getElementById("headerList").innerHTML = "Search Result";
    // Clear the field
    document.getElementById("petList").innerHTML="";
    // Travel the array (loop)
    for(let i=0; i < salon.pets.length;i++){
        // Create the card and append the tmp into the HTML
        if (name.toLowerCase() == salon.pets[i].name.toLowerCase())
        {
            document.getElementById("petList").innerHTML+=createCard(salon.pets[i], i);
        }
    }
}

function createCard(pet, index){
    return `
        <div class="pet-card">
            <button onclick="removePet(${index});">X</button>
            <h2>${pet.name}</h2>
            <label>Age: ${pet.age}<br></label>
            <label>Gender: ${pet.gender}<br></label>
            <label>Breed: ${pet.breed}<br></label>
            <label>Service: ${pet.service}<br></label>
            <label>Owner: ${pet.owner}<br></label>
            <label>Contact: ${pet.contact}</label>
            <h6>${index}</h6>
        </div>
    `;
}

function init(){
    // Create 3 pets using the constructor
    let pet1 = new Pet("Scooby", 24, "Male", "Dane", "Grooming", "Shaggy", "55-555-555");
    let pet2 = new Pet("Scrappy", 12, "Male", "Dane", "Nails Cut", "Shaggy", "555-555-555");
    let pet3 = new Pet("Krypto", 30, "Male", "Labrador", "Shower", "Clark Kent", "777-777-777");
    salon.pets.push(pet1, pet2, pet3); // Push the element into the array
    showPetsCards();
}
window.onload=init;